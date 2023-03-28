import styled from '@emotion/styled';

export const SForm = styled('div')(() => ({
    marginBottom: '30px',
}));

export const SFormWidth = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
}));

export const SInput = styled('input')(() => ({
    width: '400px',
    padding: '5px',
    borderRadius: '30px',
    border: '1px solid #4478ff',
    resize: 'none',
    outline: 'none',
    caretColor: '#4478ff',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '14px',
    marginRight: '10px',
}));

export const SButton = styled('button')(() => ({
    width: '100px',
    height: '30px',
    background: '#4478ff',
    borderRadius: '30px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '16px',
    color: '#fff',
    cursor: 'pointer',
}));
