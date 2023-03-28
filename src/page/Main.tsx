import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SWrapper } from './Main.style';
import { DataTable } from '../components/DataTable/DataTable';
import { useSelector } from 'react-redux';
import { RootState } from '../__data__/store';
import { FindUser } from '../components/FindUser/FindUser';
import { AddUser } from '../components/AddUser/AddUser';

export const Main: React.FC = () => {
    const navigate = useNavigate();
    const [foundItem, setFoundItem] = useState([]);
    const [filterActive, setFilterActive] = useState(false);

    const data = useSelector((state: RootState) => state.usersData.data);

    const [sortData, setSortData] = useState(data);

    useEffect(() => {
        if (!data) {
            return navigate('/');
        }
    }, []);

    return (
        <>
            <SWrapper>
                <FindUser
                    setFoundItem={setFoundItem}
                    setFilterActive={setFilterActive}
                    filterActive={filterActive}
                />
                <AddUser setSortData={setSortData} sortData={sortData} />
                <DataTable
                    foundItem={foundItem}
                    filterActive={filterActive}
                    setSortData={setSortData}
                    sortData={sortData}
                />
            </SWrapper>
        </>
    );
};
