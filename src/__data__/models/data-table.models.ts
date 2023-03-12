//типы для данных в data
export interface IData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    adress: {
        streetAdress: string;
        city: string;
        state: string;
        zip: string;
    };
    description: string;
}

//типы ждя reduser
export interface IDataState {
    isLoading: boolean;
    isError: boolean;
    error: string;
    data: Array<IData> | null;
}
