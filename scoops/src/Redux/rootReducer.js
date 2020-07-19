import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import milkShakeReducer from "./milkShake/milkShakeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  milkShake: milkShakeReducer,
  user: userReducer,
});

export default rootReducer;
