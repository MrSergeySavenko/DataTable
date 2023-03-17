import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';

import { Provider } from 'react-redux';

import { setupStore } from './__data__/store';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
);
