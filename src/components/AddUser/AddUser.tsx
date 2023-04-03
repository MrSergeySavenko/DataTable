import React, { useEffect, useState } from 'react';
import { IData } from '../../__data__/models/data-table.models';
import { getNewId } from '../../__data__/utils/utils';
import { SAddInput, SButton, SForm, SText, SFormWrapper, SAddUserWrapper } from './AddUser.style';

interface IProps {
    sortData: Array<IData>;
    setSortData: (arr: Array<IData>) => void;
}

export const AddUser: React.FC<IProps> = ({ sortData, setSortData }) => {
    const [newFirstName, setNewFirstName] = useState('');
    const [fieldFirstName, setFieldFirstName] = useState(false);
    const [newLastName, setNewLastName] = useState('');
    const [fieldLastName, setFieldLastName] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [fieldEmail, setFieldEmail] = useState(false);
    const [newPhone, setNewPhone] = useState('');
    const [fieldPhone, setFieldPhone] = useState(false);
    const [newStreet, setNewStreet] = useState('');
    const [fieldStreet, setFieldStreet] = useState(false);
    const [newCity, setNewCity] = useState('');
    const [fieldCity, setFieldCity] = useState(false);
    const [newState, setNewState] = useState('');
    const [fieldState, setFieldState] = useState(false);
    const [newZIP, setNewZIP] = useState('');
    const [fieldZIP, setFieldZIP] = useState(false);
    const [newDescription, setNewDescription] = useState('');
    const [fieldDescription, setFieldDescription] = useState(false);

    const [formValid, setFormValid] = useState(false);

    const [addUserActive, setAddUserActive] = useState(false);

    const reEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const reNumber = /^\d+$/;

    useEffect(() => {
        if (
            fieldFirstName &&
            fieldLastName &&
            fieldEmail &&
            fieldPhone &&
            fieldStreet &&
            fieldCity &&
            fieldState &&
            fieldZIP &&
            fieldDescription
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [
        fieldFirstName,
        fieldLastName,
        fieldEmail,
        fieldPhone,
        fieldStreet,
        fieldCity,
        fieldState,
        fieldZIP,
        fieldDescription,
    ]);

    const handleAddUser = () => {
        let constractObj = {
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: {
                streetAddress: '',
                city: '',
                state: '',
                zip: '',
            },
            description: '',
        };
        if (
            newFirstName &&
            newLastName &&
            newEmail &&
            newPhone &&
            newStreet &&
            newCity &&
            newState &&
            newState &&
            newZIP &&
            newDescription !== ''
        ) {
            constractObj.id = getNewId(sortData);
            constractObj.firstName = newFirstName;
            constractObj.lastName = newLastName;
            constractObj.email = newEmail;
            constractObj.phone = newPhone;
            constractObj.address.streetAddress = newStreet;
            constractObj.address.city = newCity;
            constractObj.address.state = newState;
            constractObj.address.zip = newZIP;
            constractObj.description = newDescription;
            setSortData([...sortData, constractObj]);
            setNewFirstName('');
            setNewLastName('');
            setNewEmail('');
            setNewPhone('');
            setNewStreet('');
            setNewCity('');
            setNewState('');
            setNewZIP('');
            setNewDescription('');
            setFieldFirstName(false);
            setFieldLastName(false);
            setFieldEmail(false);
            setFieldPhone(false);
            setFieldStreet(false);
            setFieldCity(false);
            setFieldState(false);
            setFieldZIP(false);
            setFieldDescription(false);
        }
    };

    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFieldFirstName(true);
                break;
            case 'lastName':
                setFieldLastName(true);
                break;
            case 'email':
                setFieldEmail(true);
                break;
            case 'phone':
                setFieldPhone(true);
                break;
            case 'street':
                setFieldStreet(true);
                break;
            case 'city':
                setFieldCity(true);
                break;
            case 'state':
                setFieldState(true);
                break;
            case 'zip':
                setFieldZIP(true);
                break;
            case 'description':
                setFieldDescription(true);
                break;
        }
    };

    const activeAddZone = () => {
        if (addUserActive === true) {
            return (
                <div>
                    <SFormWrapper>
                        <SForm>
                            <SText>Введите имя</SText>
                            <SAddInput
                                type='text'
                                name='firstName'
                                value={newFirstName}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewFirstName(e.target.value)}
                            />
                            {newFirstName === '' ? (
                                fieldFirstName ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : reNumber.test(String(newFirstName)) ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле введено не верно
                                </SText>
                            ) : null}
                        </SForm>
                        <SForm>
                            <SText>Введите фамилию</SText>
                            <SAddInput
                                type='text'
                                name='lastName'
                                value={newLastName}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewLastName(e.target.value)}
                            />
                            {newLastName === '' ? (
                                fieldLastName ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : reNumber.test(String(newLastName)) ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле введено не верно
                                </SText>
                            ) : null}
                        </SForm>
                        <SForm>
                            <SText>Введите email</SText>
                            <SAddInput
                                type='email'
                                name='email'
                                value={newEmail}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewEmail(e.target.value)}
                            />
                            {newEmail === '' ? (
                                fieldEmail ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : !reEmail.test(String(newEmail)) ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле введено не верно
                                </SText>
                            ) : null}
                        </SForm>
                        <SForm>
                            <SText>Введите телефон</SText>
                            <SAddInput
                                type='tel'
                                name='phone'
                                value={newPhone}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewPhone(e.target.value)}
                            />
                            {newPhone === '' ? (
                                fieldPhone ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : newPhone.length !== 10 || !reNumber.test(String(newPhone)) ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле введено не верно
                                </SText>
                            ) : null}
                        </SForm>
                        <SForm>
                            <SText>Введите улицу</SText>
                            <SAddInput
                                type='text'
                                name='street'
                                value={newStreet}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewStreet(e.target.value)}
                            />
                            {newStreet === '' ? (
                                fieldStreet ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : reNumber.test(String(newStreet)) ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле введено не верно
                                </SText>
                            ) : null}
                        </SForm>
                        <SForm>
                            <SText>Введите город</SText>
                            <SAddInput
                                type='text'
                                name='city'
                                value={newCity}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewCity(e.target.value)}
                            />
                            {newCity === '' ? (
                                fieldCity ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : reNumber.test(String(newCity)) ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле введено не верно
                                </SText>
                            ) : null}
                        </SForm>
                        <SForm>
                            <SText>Введите штат</SText>
                            <SAddInput
                                type='text'
                                name='state'
                                value={newState}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewState(e.target.value)}
                            />
                            {newState === '' ? (
                                fieldState ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : reNumber.test(String(newState)) ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле введено не верно
                                </SText>
                            ) : null}
                        </SForm>
                        <SForm>
                            <SText>Введите почтовый индекс</SText>
                            <SAddInput
                                type='number'
                                name='zip'
                                value={newZIP}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewZIP(e.target.value)}
                            />
                            {newZIP === '' ? (
                                fieldZIP ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : newZIP.length !== 6 || !reNumber.test(String(newZIP)) ? (
                                <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                    Это поле введено не верно
                                </SText>
                            ) : null}
                        </SForm>
                        <SForm>
                            <SText>Введите описание</SText>
                            <SAddInput
                                type='text'
                                name='description'
                                value={newDescription}
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => setNewDescription(e.target.value)}
                            />
                            {newDescription === '' ? (
                                fieldDescription ? (
                                    <SText style={{ color: 'red', margin: '5px 0 0 0' }}>
                                        Это поле не может быть пустым
                                    </SText>
                                ) : null
                            ) : null}
                        </SForm>
                    </SFormWrapper>
                    <SButton onClick={handleAddUser} isDis={!formValid}>
                        Добавить в таблицу
                    </SButton>
                </div>
            );
        } else {
            return <SButton onClick={handleActivateAddZone}>Добавить</SButton>;
        }
    };

    const handleActivateAddZone = () => {
        setAddUserActive(true);
    };

    return <SAddUserWrapper>{activeAddZone()}</SAddUserWrapper>;
};
