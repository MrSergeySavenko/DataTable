import React from 'react';

import { SDataTableItem, SDataTableWrapper, SUserValidation } from './DataTable.style';
import { DataTableNav } from '../NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';

export const DataTable: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.usersData);

    console.log(data);

    return (
        <>
            <SDataTableWrapper>
                <DataTableNav />
                <div>
                    {data?.map((item, i) => (
                        <SDataTableItem key={uniqueKey(item.firstName, i)}>
                            <SUserValidation>{item.id}</SUserValidation>
                            <SUserValidation>{item.firstName}</SUserValidation>
                            <SUserValidation>{item.lastName}</SUserValidation>
                            <SUserValidation>{item.email}</SUserValidation>
                            <SUserValidation>{item.phone}</SUserValidation>
                        </SDataTableItem>
                    ))}
                </div>
            </SDataTableWrapper>
        </>
    );
};
