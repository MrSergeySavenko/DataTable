import styled from '@emotion/styled';

export const SLayoutWrapper = styled('div')(() => ({
    width: '420px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
}));

export const SButtonWrapper = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
}));

export const SLayoutButton = styled('div')(() => ({
    width: '200px',
    display: 'inline-block',
    background: '#336CFF',
    borderRadius: '8px',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '20px 0',
    color: '#FFFFFF',
}));

export const SLoading = styled('div')(() => ({
    width: '100%',
}));

export const SText = styled('div')(() => ({
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '0 auto',
}));
