import styled from '@emotion/styled';

export const SDataTableWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #4478FF',
    borderRadius: '30px 30px 0 0',
}));

export const SDataTableArea = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const SDataTableItem = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 10px',
    borderBottom: '1px solid #4478FF',
    '&:last-child': {
        borderBottom: 'none',
    },
}));

export const SUserValidation = styled('div')(() => ({
    width: '20%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    paddingLeft: '8px',
}));
