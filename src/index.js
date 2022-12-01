import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./redux/sagas/rootSaga";
import rootStore from "./redux/reducers/rootStore"
import { Provider } from "react-redux";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
