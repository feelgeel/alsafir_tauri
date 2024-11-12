import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles.css";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStre";
const theStore = configureStore();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={theStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
