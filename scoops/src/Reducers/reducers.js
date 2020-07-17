import React from "react";

// (previousState, action) => newState
// (initialState, )
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // first ask reducer to get a copy of the state object (Cakes)
        ...state,
        // and THEN update the number of cakes
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
