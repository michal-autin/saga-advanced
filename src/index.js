import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import Counter from "./components/Counter";
import reducer from "./reducers";
import { flightResult } from "./reducers/flightResult";
import rootSaga from "./sagas";

import FligthsSearch from "./components/FlightsSearch";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers(reducer, flightResult),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <div>
      <Counter
        value={store.getState()}
        onIncrement={() => action("INCREMENT")}
        onDecrement={() => action("DECREMENT")}
        onIncrementIfOdd={() => action("INCREMENT_IF_ODD")}
        onIncrementAsync={() => action("INCREMENT_REQUEST")}
        onCancel={() => action("CANCEL")}
        onSearch={() => action("FLIGHT_SEARCH")}
      />
      <FligthsSearch
        type="best"
        tickets={[{ id: 1, name: "pierwszy" }, { id: 2, name: "drugi" }]}
      />
    </div>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
