const initState = {
  shoppingCart: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return action.payload;
    default:
      return state;
  }
};
export default rootReducer;
