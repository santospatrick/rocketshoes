import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotron';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={3000} />
            </Router>
        </Provider>
    );
}

export default App;
