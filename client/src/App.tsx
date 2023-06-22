import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Comp from "./components/Components";
import axios from "axios";

import homeAPI from "./service/home";

axios.defaults.baseURL = `http://localhost:3002/app`;

function App() {
  // console.log(
  //   homeAPI()
  //     .then((r) => r)
  //     .catch((e) => e)
  // );
  return (
    <Provider store={store}>
      <div className="app-container mt-5">
        <Comp.Login />
        <Comp.Chat />
      </div>
    </Provider>
  );
}

export default App;
