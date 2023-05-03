import React from 'react';
import BookList from './components/BookList';
import PrivateBookList from './components/PrivateBookList';


const App = () => (
  <div>
    <h1>Book List</h1>
    <BookList />
    <hr />
    <h1>Private Book List</h1>
    <PrivateBookList />
    <hr />
    <h1>Add User</h1>
    <hr />
    <h1>Add Book</h1>
    </div>
);

export default App;
