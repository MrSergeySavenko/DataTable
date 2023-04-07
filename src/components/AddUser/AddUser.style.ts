import styled from '@emotion/styled';

export const SAddUserWrapper = styled('div')(() => ({
    marginBottom: '30px',
}));

export const SFormWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
}));

export const SForm = styled('div')(() => ({
    marginBottom: '15px',
    marginRight: '10px',
}));

export const SAddInput = styled('input')(() => ({
    width: '250px',
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

export const SText = styled('p')(() => ({
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    marginLeft: '20px',
    marginBottom: '10px',
}));

export const SAddFormWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}));

interface ISButtonProps {
    isDis?: boolean;
}

export const SButton = styled('button')(({ isDis }: ISButtonProps) => ({
    width: '250px',
    height: '45px',
    borderRadius: '30px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '20px',
    color: '#fff',
    cursor: 'pointer',
    backgroundColor: isDis ? 'grey' : '#4478ff',
}));

export const STextAlert = styled('p')(() => ({
    height: '45px',
    textAlign: 'center',
    marginLeft: '15px',
    marginTop: '20px',
    color: '#000',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '20px',
}));
