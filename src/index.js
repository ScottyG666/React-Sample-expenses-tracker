import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/Footer/Footer'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1 className='sample-app__introduction'>Sample Expense Tracking Application</h1>
        <App />
        <Footer/>

    </div>
);