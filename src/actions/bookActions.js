import controller from './/..//controller';

export const getBooks = () => {
    const books = controller.getBooks();
    return dispatch => {
          dispatch({
            type: 'GET_BOOKS',
            payload: books
          }); 
    };
  };
  
  export const addBook = (book) => {
    const {name, author} = book;
    const status = controller.addBook({name, author});
    if(!status) return;
    return dispatch => {
          dispatch({
            type: 'ADD_BOOK',
            payload: {name, author}
          });
    };
};

    export const addPrivateBook = book => {
        const {name, author} = book;
        const status = controller.addPrivateBook({name, author});
        if(!status) return;
        return dispatch => {
              dispatch({
                type: 'ADD_PRIVATE_BOOK',
                payload: {name, author, isUserToken: true}
              });
        };
    };