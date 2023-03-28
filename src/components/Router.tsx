import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LayoutPage } from './LayoutPage/LayoutPage';
import { Main } from '../page/Main';

export const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LayoutPage />} />
                <Route path='/main' element={<Main />} />
                <Route path='*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </div>
    );
};
