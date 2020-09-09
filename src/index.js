import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import dashboard from "./dashboardStore/reducer";
import login from "./loginStore/reducer";
import { Provider } from "react-redux";
import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
  dashboard:dashboard,
  login:login
})
const store = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
