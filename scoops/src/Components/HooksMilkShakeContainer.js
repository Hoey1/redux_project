import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyMilkShake } from "../Redux";

function HooksMilkShakeContainer() {
  const numOfMilkShakes = useSelector(
    (state) => state.milkShake.numOfMilkShakes
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Milk Shakes - {numOfMilkShakes}</h2>
      <button onClick={() => dispatch(buyMilkShake())}>Buy Milk Shake</button>
    </div>
  );
}

export default HooksMilkShakeContainer;
