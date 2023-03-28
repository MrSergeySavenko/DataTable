import React, { useState, useEffect } from 'react';

import { SDataInfo, SDataItem, SDataTableItem, SDataTableWrapper, SUserValidation } from './DataTable.style';
import { DataTableNav } from '../NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';
import { DataPagination } from '../DataPagination/DataPagination';
import { IData } from '../../__data__/models/data-table.models';
import { dataSlice } from '../../__data__/reducer';

interface IProps {
    foundItem: Array<IData>;
    filterActive: boolean;
    sortData: Array<IData>;
    setSortData: (arr: Array<IData>) => void;
}

export const DataTable: React.FC<IProps> = ({ foundItem, filterActive, sortData, setSortData }) => {
    const { data } = useSelector((state: RootState) => state.usersData);
    const [pageNum, setPageNum] = useState(1);
    const [infoActive, setInfoActive] = useState(false);

    const dispatch = useDispatch();

    const { dataItem } = useSelector((state: RootState) => state.usersData);

    useEffect(() => {
        setSortData(data);
    }, [data]);

    const handleTakeInfo = (info: IData) => {
        setInfoActive(true);
        dispatch(dataSlice.actions.addItemInfo(info));
    };

    const handleClickInfo = () => {
        console.log(dataItem);
        if (infoActive) {
            return (
                <div onClick={() => setInfoActive(false)}>
                    <SDataItem>Id: {dataItem.id}</SDataItem>
                    <SDataItem>FirstName: {dataItem.firstName}</SDataItem>
                    <SDataItem>LastName: {dataItem.lastName}</SDataItem>
                    <SDataItem>Email: {dataItem.email}</SDataItem>
                    <SDataItem>Phone: {dataItem.phone}</SDataItem>
                    <SDataItem>StreetAddress: {dataItem.address.streetAddress}</SDataItem>
                    <SDataItem>City: {dataItem.address.city}</SDataItem>
                    <SDataItem>State: {dataItem.address.state}</SDataItem>
                    <SDataItem>Zip: {dataItem.address.zip}</SDataItem>
                    <SDataItem>Description: {dataItem.description}</SDataItem>
                </div>
            );
        }
    };

    const pageConstructor = () => {
        console.log(foundItem);
        let dataPage = [];
        if (filterActive) {
            dataPage = foundItem?.slice(pageNum * 20 - 20, pageNum * 20);
            console.log(dataPage);
        } else {
            dataPage = sortData?.slice(pageNum * 20 - 20, pageNum * 20);
        }

        return dataPage?.map((item, i) => (
            <SDataTableItem key={uniqueKey(item.firstName, i)} onClick={() => handleTakeInfo(item)}>
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
                <DataTableNav sortData={sortData} setSortData={setSortData} />
                <div>{pageConstructor()}</div>
            </SDataTableWrapper>
            <DataPagination
                setPageNum={setPageNum}
                pageNum={pageNum}
                foundItem={foundItem}
                filterActive={filterActive}
                sortData={sortData}
            />
            <SDataInfo>{handleClickInfo()}</SDataInfo>
        </>
    );
};
