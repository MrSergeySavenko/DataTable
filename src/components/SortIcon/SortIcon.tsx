import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { SSortIcon } from './SortIcon.style';

interface IProps {
    sortClick: number;
}

export const SortIcon: React.FC<IProps> = ({ sortClick }) => {
    const { sortName } = useSelector((state: RootState) => state.usersData);

    const sortIcon = () => {
        if (sortName === 'id' || 'phone') {
            if (sortClick === 2) {
                return <div data-nav='info'>N...1</div>;
            } else {
                if (sortClick === 1) {
                    return <div data-nav='info'>1...N</div>;
                } else {
                    return <div data-nav='info'>random</div>;
                }
            }
        } else {
            if (sortClick === 2) {
                return <div>Z...A</div>;
            } else {
                if (sortClick === 1) {
                    return <div>A...Z</div>;
                } else {
                    return <div>random</div>;
                }
            }
        }
    };

    return <SSortIcon>{sortIcon()}</SSortIcon>;
};
