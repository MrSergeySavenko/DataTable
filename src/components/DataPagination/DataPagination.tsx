import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IData } from '../../__data__/models/data-table.models';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';
import { SPaginationPage, SPadinationWrapper } from './DataPagination.style';

interface IProps {
    setPageNum: (num: number) => void;
    pageNum: number;
    foundItem: Array<IData>;
    filterActive: boolean;
    sortData: Array<IData>;
}

export const DataPagination: React.FC<IProps> = ({
    setPageNum,
    pageNum,
    foundItem,
    filterActive,
    sortData,
}) => {
    const { data } = useSelector((state: RootState) => state.usersData);
    const [pageLength, setPageLength] = useState<Array<number>>([]);
    const [pages, setPages] = useState<Array<number | string>>([1]);

    useEffect(() => {
        if (data) {
            const numTest = Math.ceil(sortData?.length / 20);
            const pageArr: Array<number> = Array(numTest)
                .fill(1)
                .map((item, i) => i + 1);
            console.log(pageArr);
            return setPageLength(pageArr);
        }
    }, [sortData]);

    useEffect(() => {
        if (filterActive) {
            const numTest = Math.ceil(foundItem.length / 20);
            const pageArr: Array<number> = Array(numTest)
                .fill(1)
                .map((item, i) => i + 1);
            console.log(pageArr);
            return setPageLength(pageArr);
        } else {
            if (data) {
                const numTest = Math.ceil(data?.length / 20);
                const pageArr: Array<number> = Array(numTest)
                    .fill(1)
                    .map((item, i) => i + 1);
                console.log(pageArr);
                return setPageLength(pageArr);
            }
        }
    }, [foundItem]);

    useEffect(() => {
        constructPagination();
    }, [pageNum]);

    useEffect(() => {
        constructPagination();
    }, [pageLength]);

    const setCurrentPage = (e: any) => {
        setPageNum(Number(e.target.innerText));
        console.log(pageNum);
    };

    const constructPagination = () => {
        const dots: any = ['...'];
        const firstPage = [pageLength[0]];
        const lastPage = [pageLength[pageLength.length - 1]];
        let paginConstruct: Array<number | string> = [];
        if (pageLength.length >= 9) {
            if (pageNum >= 4 && pageNum <= pageLength.length - 3) {
                paginConstruct = firstPage
                    .concat(dots)
                    .concat(pageLength.slice(pageNum - 2, pageNum + 1))
                    .concat(dots)
                    .concat(lastPage);
            } else {
                if (pageNum < 4) {
                    paginConstruct = firstPage.concat(pageLength.slice(1, 4)).concat(dots).concat(lastPage);
                } else {
                    if (pageNum > pageLength.length - 3) {
                        paginConstruct = firstPage
                            .concat(dots)
                            .concat(pageLength.slice(pageLength.length - 4, pageLength.length - 1))
                            .concat(lastPage);
                    }
                }
            }
        } else {
            paginConstruct = pageLength;
        }

        setPages(paginConstruct);
    };

    console.log(pageLength);

    return (
        <>
            <SPadinationWrapper>
                {pages.map((item, i) => (
                    <div>
                        <SPaginationPage key={uniqueKey(item, i)} onClick={setCurrentPage}>
                            {item}
                        </SPaginationPage>
                    </div>
                ))}
            </SPadinationWrapper>
        </>
    );
};

//Пагинация: нужно сделать видимыми всегда первый и последний элемент(блоки с цифрами)
//проблема в том что промедуточные блоки должны быть в большинстве своем невидимы и с шагом в 3 блока показываться на экране(1 2 3 4 ... 10
// 3 актив -> 1 2 3 4 ... 10
// 4 актив -> 1 ... 4 5 6 ... 10
// 10 актив -> 1 ... 7 8 9 10)
