import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { store } from "./redux/store";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
    </React.StrictMode>
  </Provider>
);
