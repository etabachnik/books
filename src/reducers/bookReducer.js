const bookReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_BOOKS':
        return action.payload;
      case 'ADD_BOOK':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default bookReducer;