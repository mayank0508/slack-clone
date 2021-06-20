export const initialState = {
  // this is termed as the intial stage of the transition
  user: null 
};

export const actionTypes = {
  // this is used for declaring the actions
  SET_USER: 'SET_USER'
};

const reducer = (state, action) => {
  console.log(action);

  switch (
    action.type // this is used to listen to the user
  ) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;
