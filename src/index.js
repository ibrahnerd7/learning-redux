import React from "react";
import ReactDOM from "react-dom";
import store from './redux/store'
import {Provider} from 'react-redux'

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
  <TodoApp />
</Provider>
, rootElement);
