import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState, IData } from '../models/data-table.models';

const initialState: IDataState = {
    data: null,
    isLoading: false,
    isError: false,
    error: '',
    sortName: '',
    dataItem: null,
    newUser: null,
};

export const dataSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        dataFetch(state: Draft<IDataState>) {
            return { ...state, isLoading: true };
        },
        dataFetchFailure(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, isLoading: false, isError: true, error: action.payload };
        },
        dataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<Array<IData>>) {
            return { ...state, isLoading: false, data: action.payload };
        },
        addSortName(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, sortName: action.payload };
        },
        addItemInfo(state: Draft<IDataState>, action: PayloadAction<IData>) {
            return { ...state, dataItem: action.payload };
        },
        addNewUser(state: Draft<IDataState>, action: PayloadAction<IData>) {
            return { ...state, newUser: action.payload };
        },
    },
});

export default dataSlice.reducer;
