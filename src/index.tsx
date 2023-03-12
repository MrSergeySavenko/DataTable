import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './page/Main';
import './style/index.scss';

import { Provider } from 'react-redux';

import { setupStore } from './__data__/store';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <Main />
    </Provider>
);
