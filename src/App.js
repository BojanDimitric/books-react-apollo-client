import React from 'react';

import './bootstrap/bootstrap.min.css';

import Books from  './components/Books';
import AddBook from './components/AddBook';

const App = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 my-5'>
                    <h1>Books!</h1>
                    <Books />
                    <AddBook />
                </div>
            </div>
        </div>
    );
};

export default App;