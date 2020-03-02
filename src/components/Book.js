import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getBook } from '../queries/queries';

const Book = props => {
    const { loading, error, data: { book } = {} } = useQuery(getBook, { variables: { id: props.id} });

    return (
        <>
            <hr />
            {loading ? <p className='my-5'>Loading...</p> : null}
            {error ? <p className='my-5'>{error.message}!</p> : null}
            <h3 className='mt-5'>Book details!</h3>
            {
                book 
                ? (
                    <>
                        <p>{book.name}</p>
                        <p>{book.genre}</p>
                        <p>{book.author.name}</p>
                        <p>Other books from {book.author.name}.</p>
                        <ul className='mt-3 mb-5'>
                            {book.author.books.map(item => <li key={item.id}>{item.name}</li>)}
                        </ul>
                    </>
                ) 
                : <p>No book selected!</p>
            }
            <hr />
        </>
    );
};

export default Book;