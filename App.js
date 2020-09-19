import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigator from './componen/navigator/Navigator';
import Footer from './componen/Footer/Footer';
import Header from './componen/header/Header';
import Dialogs from './componen/Dialogs/Dialogs';
import Content from './componen/Content/Content';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
    return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navigator />
            <div className="app-wrapper-contentn">
                <Router path='/profiles' component={Content} />
                <Router path='/dialogs' component={Dialogs} />
            </div>
            <Footer />
        </div>
    </BrowserRouter>
    );
}

export default App;
