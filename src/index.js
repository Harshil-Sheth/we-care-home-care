import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import CardList from './components/service-cardlist/service-cardlist.componet';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,

    document.getElementById('root')
);
