import React from 'react';

import { SDataTableArr, SDataTableWrapper } from './DataTable.style';
import { DataTableNav } from '../NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';

export const DataTable: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.usersData);

    console.log(data);

    const dispatch = useDispatch();

    return (
        <>
            {/*@ts-ignore*/}
            <SDataTableWrapper>
                <DataTableNav />
                {data &&
                    data.map((item, i) => {
                        <SDataTableArr key={uniqueKey(item.firstName, i)}>
                            <div>{item.id}</div>
                            <div>{item.firstName}</div>
                            <div>{item.lastName}</div>
                            <div>{item.email}</div>
                            <div>{item.phone}</div>
                        </SDataTableArr>;
                    })}
            </SDataTableWrapper>
        </>
    );
};
