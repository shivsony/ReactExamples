const initialState = {
  result: 2,
  lastValue: [0]
};
const mathReducer = (state=initialState , action) => {
  switch (action.type) {
    case 'add':
      state= {
        ...state,
        result : state.result + action.payload,
        lastValue: [...state.lastValue,action.payload]
      }
      break;
      case 'sub':
        state= {
          ...state,
          result : state.result - action.payload,
          lastValue: [...state.lastValue,action.payload]
        }
        break;
    default:
      return state;
  }
  return state;
}
export default mathReducer
