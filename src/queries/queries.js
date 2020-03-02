import { gql } from 'apollo-boost';

const getAuthors = gql`
    {
        authors {
            id,
            name
        }
    }
`;

const getBook = gql`
    query book($id: ID!) {
        book(id: $id) {
            id,
            name,
            genre,
            author {
                id,
                name,
                age,
                books {
                    id,
                    name,
                    genre
                }
            }
        }
    }
`;

const getBooks = gql`
    {
        books {
            id,
            name
        }
    }
`;

const addBook = gql`
    mutation addBook($name: String!, $genre: String!, $author: ID!) {
        addBook(name: $name, genre: $genre, author: $author) {
            name,
            genre,
            author {
                name,
                age
            }
        }
    }
`;

export {
    getAuthors,
    getBook, 
    getBooks,
    addBook
};