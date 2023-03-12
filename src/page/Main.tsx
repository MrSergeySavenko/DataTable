import React, { useEffect } from 'react';
import { SWrapper } from './Main.style';
import { DataTable } from '../components/DataTable/DataTable';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../__data__/actions/usersData.actions';

export const Main: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers() as any);
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
