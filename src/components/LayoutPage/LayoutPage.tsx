import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchDataLow, fetchDataBig } from '../../__data__/actions/usersData.actions';
import { RootState } from '../../__data__/store';
import { SButtonWrapper, SLayoutButton, SLayoutWrapper, SLoading, SText } from './LayoutPage.style';

export const LayoutPage: React.FC = () => {
    const dispatch = useDispatch();

    const { data, isLoading } = useSelector((state: RootState) => state.usersData);

    const dataLoadingLow = () => {
        dispatch(fetchDataLow() as any);
    };

    const dataLoadingBig = () => {
        dispatch(fetchDataBig() as any);
    };

    const handleRouteMain = () => {
        if (data) {
            return <Navigate to={'/main'} />;
        }
    };

    return (
        <SLayoutWrapper>
            <SButtonWrapper>
                <SLayoutButton onClick={dataLoadingLow} data-test='btnL'>
                    Маленькая кнопка
                </SLayoutButton>
                <SLayoutButton onClick={dataLoadingBig} data-test='btnB'>
                    Большая кнопка
                </SLayoutButton>
            </SButtonWrapper>

            <SLoading>{isLoading ? <SText>{'...Загрузка'}</SText> : null}</SLoading>
            {handleRouteMain()}
        </SLayoutWrapper>
    );
};
