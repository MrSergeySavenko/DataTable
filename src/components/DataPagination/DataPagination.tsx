import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { uniqueKey } from '../../__data__/utils/utils';
import { SPaginationPage, SPadinationWrapper } from './DataPagination.style';

interface IProps {
    setPageNum: (num: number) => void;
    pageNum: number;
}

export const DataPagination: React.FC<IProps> = ({ setPageNum, pageNum }) => {
    const { data } = useSelector((state: RootState) => state.usersData);
    const [pageLength, setPageLength] = useState<Array<number>>([]);
    const [pages, setPages] = useState<Array<any>>([]);

    useEffect(() => {
        if (data) {
            const numTest = Math.ceil(data.length / 20);
            let pageArr: Array<number> = Array(numTest).fill(1);
            return setPageLength(pageArr);
        }
    }, [data]);

    useEffect(() => {
        constructPagination();
    }, [pageNum]);

    const setCurrentPage = (e: any) => {
        setPageNum(Number(e.target.innerText));
    };

    const constructPagination = () => {
        const dots = [Number('...')];
        const firstPage = [pageLength[0]];
        const lastPage = [pageLength[pageLength.length - 1]];
        let paginConstruct: Array<number> = [];
        if (pageLength.length >= 9) {
            if (pageNum >= 4 && pageNum <= pageLength.length - 3) {
                paginConstruct = firstPage
                    .concat(dots)
                    .concat(pageLength.slice(pageNum, pageNum + 3))
                    .concat(lastPage);
            } else {
                paginConstruct = firstPage
                    .concat(pageLength.slice(pageNum, pageNum + 3))
                    .concat(dots)
                    .concat(lastPage);
            }
        }

        setPages(paginConstruct);
    };

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

// if (item) {
//     return (
//         <div>
//             <SPaginationPage key={uniqueKey(item, i)} onClick={addValue}>
//                 {paginConstruct[i] + 1}
//             </SPaginationPage>
//         </div>
//     );
// } else {
//     return (
//         <div>
//             <SPaginationPage key={uniqueKey(item, i)}>{'...'}</SPaginationPage>
//         </div>
//     );
// }
