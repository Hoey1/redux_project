import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import HooksMilkShakeContainer from "./Components/HooksMilkShakeContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksMilkShakeContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
