import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IData } from '../../__data__/models/data-table.models';
import { dataSlice } from '../../__data__/reducer';
import { RootState } from '../../__data__/store';
import { SAddInput, SButton, SForm, SText, SFormWrapper, SAddUserWrapper } from './AddUser.style';

interface IProps {
    sortData: Array<IData>;
    setSortData: (arr: Array<IData>) => void;
}

export const AddUser: React.FC<IProps> = ({ sortData, setSortData }) => {
    const [newID, setNewID] = useState('');
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newStreet, setNewStreet] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newState, setNewState] = useState('');
    const [newZIP, setNewZIP] = useState('');
    const [newDescription, setNewDiscription] = useState('');

    const [addUserActive, setAddUserActive] = useState(false);

    const { newUser } = useSelector((state: RootState) => state.usersData);

    const dispatch = useDispatch();

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
            newID &&
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
            constractObj.id = Number(newID);
            constractObj.firstName = newFirstName;
            constractObj.lastName = newLastName;
            constractObj.email = newEmail;
            constractObj.phone = newPhone;
            constractObj.address.streetAddress = newStreet;
            constractObj.address.city = newCity;
            constractObj.address.state = newState;
            constractObj.address.zip = newZIP;
            constractObj.description = newDescription;
            dispatch(dataSlice.actions.addNewUser(constractObj));
            const arrAddUser = [constractObj];
            setSortData(sortData.concat(arrAddUser));

            console.log(newUser);
        }
    };

    useEffect(() => {
        console.log(newUser);
        console.log(sortData);
    }, [newUser]);

    const activeAddZone = () => {
        if (addUserActive === true) {
            return (
                <div>
                    <SFormWrapper>
                        <SForm>
                            <SText>Введите ID</SText>
                            <SAddInput
                                type='number'
                                value={newID}
                                onChange={(e) => setNewID(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите имя</SText>
                            <SAddInput
                                type='text'
                                value={newFirstName}
                                onChange={(e) => setNewFirstName(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите фамилию</SText>
                            <SAddInput
                                type='text'
                                value={newLastName}
                                onChange={(e) => setNewLastName(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите email</SText>
                            <SAddInput
                                type='email'
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите телефон</SText>
                            <SAddInput
                                type='tel'
                                value={newPhone}
                                onChange={(e) => setNewPhone(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите улицу</SText>
                            <SAddInput
                                type='text'
                                value={newStreet}
                                onChange={(e) => setNewStreet(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите город</SText>
                            <SAddInput
                                type='text'
                                value={newCity}
                                onChange={(e) => setNewCity(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите штат</SText>
                            <SAddInput
                                type='text'
                                value={newState}
                                onChange={(e) => setNewState(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите почтовый индекс</SText>
                            <SAddInput
                                type='number'
                                value={newZIP}
                                onChange={(e) => setNewZIP(e.target.value)}
                            />
                        </SForm>
                        <SForm>
                            <SText>Введите описание</SText>
                            <SAddInput
                                type='text'
                                value={newDescription}
                                onChange={(e) => setNewDiscription(e.target.value)}
                            />
                        </SForm>
                    </SFormWrapper>
                    <SButton onClick={handleAddUser}>Добавить в таблицу</SButton>
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
