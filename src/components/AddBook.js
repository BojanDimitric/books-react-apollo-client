import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { getAuthors, getBooks, addBook } from '../queries/queries';

const AddBook = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');

    const { loading, error, data: { authors } = {} } = useQuery(getAuthors);
    const [ setBook, { data: { book } = {} } ] = useMutation(addBook);

    const reset = () => {
        setName('');
        setGenre('');
        setAuthor('');
    };

    const submit = e => {
        e.preventDefault();
        if (name.trim() && genre.trim() && author.trim()) {
            setBook({ 
                variables: { name: name.trim(), genre: genre.trim(), author: author.trim() },
                refetchQueries: [{ query: getBooks }] 
            });
            reset();
        };
    };

    return (
        <>
            {loading ? <p className='my-5'>Loading...</p> : null}
            {error ? <p className='my-5'>{error.message}!</p> : null}
            <form className='my-5' onSubmit={e => submit(e)}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='name' 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        placeholder='Input name' 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='genre'>Genre</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='genre' 
                        value={genre}
                        onChange={e => setGenre(e.target.value)} 
                        placeholder='Input genre'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='select'>Author</label>
                    <select 
                        className='form-control' 
                        id='select'
                        value={author}
                        onChange={e => setAuthor(e.target.value)} 
                    >   
                        <option>Select author</option>
                        {
                            authors 
                            ? authors.map(item => <option key={item.id} value={item.id}>{item.name}</option>) 
                            : null
                        }
                    </select>
                </div>
                <button type='submit' className='btn btn-block btn-primary mt-5'>Submit</button>
            </form>
        </>
    );
};

export default AddBook;