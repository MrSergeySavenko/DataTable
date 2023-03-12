import React from 'react';

import { SNav, SValidation } from './NavBar.style';

export const DataTableNav: React.FC = () => {
    return (
        <>
            <SNav>
                <SValidation>Id</SValidation>
                <SValidation>FirstName</SValidation>
                <SValidation>LastName</SValidation>
                <SValidation>Emale</SValidation>
                <SValidation>Phone</SValidation>
            </SNav>
        </>
    );
};
