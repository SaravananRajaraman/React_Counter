import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./app";

/*
reducer:
  This contain the list of actions, thats perform the bus logic

  The const reducer/store are named to follow the best parts
  However u can follow ur own name, if u want
*/
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUB":
      state = state - action.payload;
      break;
  }
  return state;
};

/* 
store
  This is an heart of store, it only contain the single object of entire app.
*/
const store = createStore(reducer);

/*
subscribe
  This is simple one, this can triger, if any change made on store
*/
store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

// Actions
//  This something like events, u can fire when u want to update an bus logic
store.dispatch({
  type: "ADD",
  payload: 1
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
