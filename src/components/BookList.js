import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '..//actions/bookActions'

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <ul>
      {books.map(book => (
        <li key={book.name}>{book.author}: {book.name}</li>
      ))}
    </ul>
  );
};

export default BookList;