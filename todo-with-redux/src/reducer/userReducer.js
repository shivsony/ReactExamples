const userReducer = (state={
name: 'max',
age: 23
} , action) => {
  switch (action.type) {
    case 'change_name':
      state= {
        ...state,
        name: action.payload
      }
      break;
    case 'change_age':
      state = {
        ...state,
        age: action.payload
      }
      break;
    default:
      return state;
  }
  return state;
}

export default  userReducer;
