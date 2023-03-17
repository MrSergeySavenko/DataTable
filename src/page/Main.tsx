import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SWrapper } from './Main.style';
import { DataTable } from '../components/DataTable/DataTable';
import { useSelector } from 'react-redux';
import { RootState } from '../__data__/store';

export const Main: React.FC = () => {
    const navigate = useNavigate();

    const data = useSelector((state: RootState) => state.usersData.data);

    useEffect(() => {
        if (!data) {
            return navigate('/');
        }
    }, []);

    return (
        <>
            <SWrapper>
                <div></div>
                <div></div>
                <DataTable />
            </SWrapper>
        </>
    );
};
