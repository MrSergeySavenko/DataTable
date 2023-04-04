describe('Роутинг', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Страница выбора', () => {
        cy.url().should('include', '/');

        cy.get('div[data-test="btnL"]').click();
        cy.url().should('include', '/main');

        cy.reload();
        cy.url().should('include', '/');

        cy.get('div[data-test="btnB"]').click();
        cy.intercept('http://www.filltext.com/*').as('getData');
        cy.wait(['@getData']);
        cy.url().should('include', '/main');

        cy.reload();
        cy.url().should('include', '/');
    });
});
