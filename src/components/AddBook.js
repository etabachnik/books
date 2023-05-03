import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/bookActions';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBook(book));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={book.title} onChange={e => setBook({ ...book, title: e.target.value })} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={book.author} onChange={e => setBook({ ...book, author: e.target.value })} />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;