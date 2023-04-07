import React from 'react';
import SDataTableItem from '../../src/components/DataTable/DataTable';

describe('Функционал', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Ввод данных в поисковик', () => {
        cy.get('div[data-test="btnL"]').click();
        cy.url().should('include', '/main');

        cy.get('input[data-test="findI"]').should('have.value', '');
        cy.get('button[data-test="findBtn"]').should('have.text', 'Найти');

        cy.get('input[data-test="findI"]').type('56').should('have.value', '56');
        cy.get('button[data-test="findBtn"]').click();
        cy.get('input[data-test="findI"]').should('have.value', '');
    });

    it('Проверка поиска данных', () => {
        const getItem = () => cy.get('div[data-test]');

        cy.get('div[data-test="btnL"]').click();
        cy.intercept('http://www.filltext.com/*').as('getData');
        cy.wait(['@getData']);
        cy.url().should('include', '/main');

        getItem().should('have.length', 20);

        const itemLength1 = getItem().then((body) => body.length);

        cy.get('input[data-test="findI"]').type('56').should('have.value', '56');
        cy.get('button[data-test="findBtn"]').click();

        getItem().should((div) => {
            div.length >= 0;
        });

        const itemLength2 = getItem().then((body) => body.length);

        getItem().then(() => {
            if (itemLength1 > itemLength2) {
                cy.reload();
            }
        });
    });

    it('Проверка активной страници и изменение данных при ее переключении', () => {
        cy.get('div[data-test="btnB"]').click();
        cy.intercept('http://www.filltext.com/*').as('getData');
        cy.wait(['@getData']);
        cy.url().should('include', '/main');

        /*invoke позволяет войти в нудный атрибут, then работает со значением найденного атрибута,
        wrap записывает значение переменной, as название переменной со значением из wrap */
        cy.get('div[data-item="1"]')
            .invoke('text')
            .then((text) => cy.wrap(text).as('id'));

        cy.get('div[data-pag=1]').should('have.css', 'background-color', 'rgb(68, 120, 255)');

        cy.get('div[data-pag=2]').click();
        cy.get('div[data-pag=2]').should('have.css', 'background-color', 'rgb(68, 120, 255)');

        /*invoke переходят к атибуту text, then вводит его значение,
        get(@id) получает доступ к записанной ранее переменной, should проверяет на не равенство значений @id и text*/
        cy.get('div[data-item="1"]')
            .invoke('text')
            .then((text) => cy.get('@id').should('not.equal', text));
    });

    it('Проверка валидации колонки значений id', () => {
        cy.get('div[data-test="btnL"]').click();
        cy.url().should('include', '/main');

        cy.get('div[data-item="1"]')
            .invoke('text')
            .then((text) => cy.wrap(text).as('base'));

        cy.get('div[data-nav="id"]').should('have.text', 'Id').click();
        cy.get('div[data-nav="info"]').should('have.text', '1...N');

        cy.get('div[data-item="1"]')
            .invoke('text')
            .then((text) => cy.wrap(text).as('num'));

        cy.get('div[data-item="2"]')
            .invoke('text')
            .then((text) => {
                if (text < cy.get('@num')) {
                    cy.log('jopa');
                }
            });

        cy.get('div[data-nav="id"]').should('have.text', 'Id1...N').click();
        cy.get('div[data-nav="info"]').should('have.text', 'N...1');

        cy.get('div[data-item="1"]')
            .invoke('text')
            .then((text) => cy.wrap(text).as('id'));

        cy.get('div[data-item="2"]')
            .invoke('text')
            .then((text) => {
                if (text > cy.get('@id')) {
                    cy.log('jopa');
                }
            });

        cy.get('div[data-nav="id"]').should('have.text', 'IdN...1').click();
        cy.get('div[data-nav="info"]').should('have.text', 'random');

        cy.get('div[data-item="1"]')
            .invoke('text')
            .then((text) => {
                if (text === cy.get('@base')) {
                    cy.log('jopa');
                }
            });
    });

    it('Проверка поля добавления', () => {
        cy.get('div[data-test="btnB"]').click();
        cy.intercept('http://www.filltext.com/*').as('getData');
        cy.wait(['@getData']);
        cy.url().should('include', '/main');

        cy.get('button[data-add="active"]').should('have.text', 'Добавить').click();

        cy.get('input[data-add]').should('have.length', 9);

        cy.get('input[data-add="firstName"]').type('a').should('have.value', 'a');
        cy.get('input[data-add="lastName"]').type('a').should('have.value', 'a');
        cy.get('input[data-add="email"]')
            .type('sergey.sav.2666@mail.ru')
            .should('have.value', 'sergey.sav.2666@mail.ru');
        cy.get('input[data-add="phone"]').type('1234567891').should('have.value', '1234567891');
        cy.get('input[data-add="street"]').type('a').should('have.value', 'a');
        cy.get('input[data-add="city"]').type('a').should('have.value', 'a');
        cy.get('input[data-add="state"]').type('a').should('have.value', 'a');
        cy.get('input[data-add="zip"]').type('123456').should('have.value', '123456');
        cy.get('input[data-add="description"]').type('a').should('have.value', 'a');

        cy.get('button[data-add="add"]').should('have.text', 'Добавить в таблицу').click();
        cy.get('p[data-add="alert"]').should('have.text', 'Данные добавленны в таблицу');

        cy.get('div[data-pag="51"]').click();

        cy.get('div[data-fName="1"]').should('have.text', 'a');
        cy.get('div[data-lName="1"]').should('have.text', 'a');

        cy.get('input[data-add="firstName"]').should('have.value', '');
        cy.get('input[data-add="lastName"]').should('have.value', '');
        cy.get('input[data-add="email"]').should('have.value', '');
        cy.get('input[data-add="phone"]').should('have.value', '');
        cy.get('input[data-add="street"]').should('have.value', '');
        cy.get('input[data-add="city"]').should('have.value', '');
        cy.get('input[data-add="state"]').should('have.value', '');
        cy.get('input[data-add="zip"]').should('have.value', '');
        cy.get('input[data-add="description"]').should('have.value', '');
    });

    it('Проверка наличия и работы информационного поля', () => {
        cy.get('div[data-test="btnL"]').click();
        cy.url().should('include', '/main');

        cy.get('div[data-test=1]').click();
        cy.get('div[data-test="info"]').click();
    });
});
