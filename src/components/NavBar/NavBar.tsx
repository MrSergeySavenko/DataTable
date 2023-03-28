import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IData } from '../../__data__/models/data-table.models';
import { dataSlice } from '../../__data__/reducer';
import { RootState } from '../../__data__/store';
import { SortIcon } from '../SortIcon/SortIcon';

import { SNav, SValidation } from './NavBar.style';

interface IProps {
    sortData: Array<IData> | null;
    setSortData: (arr: Array<IData>) => void;
}

export const DataTableNav: React.FC<IProps> = ({ sortData, setSortData }) => {
    const [sortClick, setSortClick] = useState(0);

    const { data, sortName } = useSelector((state: RootState) => state.usersData);

    const dispatch = useDispatch();

    const handleSort = (field) => {
        const name = field;
        if (sortName === field) {
            if (sortClick === 0) {
                if (sortData) {
                    const sortDataConstract = [...sortData].sort((a: IData, b: IData) =>
                        a[field] > b[field] ? 1 : -1
                    );
                    setSortData(sortDataConstract);
                    setSortClick(1);
                    console.log(sortClick);
                }
            } else {
                if (sortClick === 1) {
                    const sortDataConstract = [...sortData].sort((a: IData, b: IData) =>
                        b[field] > a[field] ? 1 : -1
                    );
                    setSortData(sortDataConstract);
                    setSortClick(2);
                    console.log(sortClick);
                } else {
                    setSortData(data);
                    setSortClick(0);
                    console.log(sortClick);
                }
            }
        } else {
            if (sortData) {
                const sortDataConstract = [...sortData].sort((a: IData, b: IData) =>
                    a[name] > b[name] ? 1 : -1
                );
                setSortData(sortDataConstract);
                setSortClick(1);
                console.log(sortClick);
            }
        }
    };

    const handleSortNameClicl = (name) => {
        dispatch(dataSlice.actions.addSortName(name));
        handleSort(name);
    };

    return (
        <>
            <SNav>
                <SValidation onClick={() => handleSortNameClicl('id')}>
                    Id
                    {sortName === 'id' ? <SortIcon sortClick={sortClick} /> : null}
                </SValidation>
                <SValidation onClick={() => handleSortNameClicl('firstName')}>
                    FirstName
                    {sortName === 'firstName' ? <SortIcon sortClick={sortClick} /> : null}
                </SValidation>
                <SValidation onClick={() => handleSortNameClicl('lastName')}>
                    LastName
                    {sortName === 'lastName' ? <SortIcon sortClick={sortClick} /> : null}
                </SValidation>
                <SValidation onClick={() => handleSortNameClicl('email')}>
                    Emale
                    {sortName === 'email' ? <SortIcon sortClick={sortClick} /> : null}
                </SValidation>
                <SValidation onClick={() => handleSortNameClicl('phone')}>
                    Phone
                    {sortName === 'phone' ? <SortIcon sortClick={sortClick} /> : null}
                </SValidation>
            </SNav>
        </>
    );
};
