import controller from './/..//controller';

export const addUser = ({name, email}) => {
    const status = controller.addUser({name, email});
    if(!status) return; 
    return dispatch => {
          dispatch({
            type: 'ADD_USER',
            payload: {name, email}
          });
    };
};