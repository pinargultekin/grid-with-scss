import React from "react";
import { render } from "react-dom";

import "./styles.scss";

const App = () => (
  <div>
    <h1>Hello</h1>
  </div>
);

render(<App />, document.getElementById("app"));
