import { IData } from '../models/data-table.models';
import { dataSlice } from '../reducer';
import { AppDispatch } from '../store';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.dataFetch());

        const url =
            'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

        const response = await fetch(url);
        const data: Array<IData> = await response.json();

        if (response) {
            dispatch(dataSlice.actions.dataFetchSuccess(data));
        }
    } catch (err: unknown) {
        dispatch(dataSlice.actions.dataFetchFailure(err as string));
        console.error(err);
    }
};
