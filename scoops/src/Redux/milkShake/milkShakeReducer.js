import { BUY_MILKSHAKE } from "./milkShakeTypes";

const initialState = {
  numOfMilkShakes: 20,
};

const milkShakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MILKSHAKE:
      return {
        ...state,
        numOfMilkShakes: state.numOfMilkShakes - 1,
      };
    default:
      return state;
  }
};

export default milkShakeReducer;
