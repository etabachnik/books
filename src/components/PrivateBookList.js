import React from 'react';
import { useSelector } from 'react-redux';

const PrivateBookList = () => {
  const privateBooks = useSelector(state => state.privateBooks);

  return (
    <ul>
      {privateBooks.map(book => (
        <li key={book.name}>{book.author}: {book.name}</li>
      ))}
    </ul>
  );
};

export default PrivateBookList;