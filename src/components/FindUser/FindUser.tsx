import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IData } from '../../__data__/models/data-table.models';
import { RootState } from '../../__data__/store';
import { SButton, SForm, SFormWidth, SInput } from './FindUser.style';

interface IProps {
    setFoundItem: (arr: Array<IData>) => void;
    setFilterActive: (boolean) => void;
    filterActive: boolean;
}

export const FindUser: React.FC<IProps> = ({ setFoundItem, filterActive, setFilterActive }) => {
    const { data } = useSelector((state: RootState) => state.usersData);
    const [text, setText] = useState('');

    const findItem = (e) => {
        e.preventDefault();
        text === '' ? setFilterActive(false) : setFilterActive(true);
        const filterData = [];
        data.filter((item) => {
            if (String(item.id).includes(text)) {
                filterData.push(item);
            } else {
                if (item.firstName.includes(text)) {
                    filterData.push(item);
                } else {
                    if (item.lastName.includes(text)) {
                        filterData.push(item);
                    } else {
                        if (item.email.includes(text)) {
                            filterData.push(item);
                        } else {
                            if (item.phone.includes(text)) {
                                filterData.push(item);
                            }
                        }
                    }
                }
            }
        });
        setFoundItem(filterData);
        setText('');
        console.log(filterActive);
    };

    return (
        <SForm>
            <SFormWidth>
                <SInput value={text} onChange={(e) => setText(e.target.value)} />
                <SButton onClick={findItem}>Найти</SButton>
            </SFormWidth>
            <div></div>
        </SForm>
    );
};
