const privateBookReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PRIVATE_BOOK':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default privateBookReducer;