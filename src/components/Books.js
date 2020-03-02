import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getBooks } from '../queries/queries';

import Book from '../components/Book';

const Books = () => {
    const [id, setId] = useState('5e4537a2a087e608c8cb2d5a');

    const { loading, error, data: { books } = {} } = useQuery(getBooks);

    return (
        <>
            {loading ? <p className='my-5'>Loading...</p> : null}
            {error ? <p className='my-5'>{error.message}!</p> : null}
            <ul className='list-group my-5'>
                {
                    books 
                    ? books.map(item => <li key={item.id} className={id === item.id ? 'list-group-item active' : 'list-group-item'} onClick={e => setId(item.id)}>{item.name}</li>) 
                    : null
                }
            </ul>
            <Book id={id} />
        </>
    );
};

export default Books;