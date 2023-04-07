import styled from '@emotion/styled';

export const SPadinationWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0',
    justifyContent: 'center',
}));

interface ISProp {
    activePage: boolean;
}

export const SPaginationPage = styled('div')(({ activePage }: ISProp) => ({
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '30px',
    width: '50px',
    height: '50px',
    border: '1px solid #4478FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
    '&:last-child': {
        marginRight: 'none',
    },
    cursor: 'pointer',
    background: activePage ? '#4478FF' : '#fff',
    color: activePage ? '#fff' : '#000',
}));
