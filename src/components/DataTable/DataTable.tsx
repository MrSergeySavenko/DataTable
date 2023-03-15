import React, { useState } from 'react';

import { SDataTableItem, SDataTableWrapper, SUserValidation } from './DataTable.style';
import { DataTableNav } from '../NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';
import { DataPagination } from '../DataPagination/DataPagination';

export const DataTable: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.usersData);
    const [pageNum, setPageNum] = useState(1);

    const pageConstructor = () => {
        const dataPage = data?.slice(pageNum * 20 - 20, pageNum * 20);

        return dataPage?.map((item, i) => (
            <SDataTableItem key={uniqueKey(item.firstName, i)}>
                <SUserValidation>{item.id}</SUserValidation>
                <SUserValidation>{item.firstName}</SUserValidation>
                <SUserValidation>{item.lastName}</SUserValidation>
                <SUserValidation>{item.email}</SUserValidation>
                <SUserValidation>{item.phone}</SUserValidation>
            </SDataTableItem>
        ));
    };

    console.log(data);

    return (
        <>
            <SDataTableWrapper>
                <DataTableNav />
                <div>{pageConstructor()}</div>
            </SDataTableWrapper>
            <DataPagination setPageNum={setPageNum} pageNum={pageNum} />
        </>
    );
};
