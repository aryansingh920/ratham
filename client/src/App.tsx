import React from "react";
import { Provider } from "react-redux"; // Import the Provider component
import store from "./redux/store"; // Import your Redux store
import "./App.css";
import components from "./components/Components";

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap the component with the Provider component */}
      <>
        <components.CounterComponent />
      </>
    </Provider>
  );
}

export default App;
