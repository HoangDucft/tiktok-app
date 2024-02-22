import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from '~/components/GlobalStyles';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import ProviderContext from './contexts/ProviderContext';
import { Provider } from 'react-redux';
import store from './redux/store/store';

// my component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>\
    <Provider store={store}>
        <ProviderContext>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </ProviderContext>
        ,
    </Provider>,

    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
