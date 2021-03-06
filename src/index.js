import React from "react";
import { render } from "react-dom";

import "./styles.scss";

const App = () => (
  <div>
    <section className="grid-test">
      <div className="row header">
        <h1> GRID SYSTEM </h1>
      </div>
      <div className="row">
        <div className="col-1-2">Column 1 of 2 </div>
        <div className="col-1-2">Column 1 of 2 </div>
      </div>
      <div className="row">
        <div className="col-1-3">Column 1 of 3 </div>
        <div className="col-1-3">Column 1 of 3 </div>
        <div className="col-1-3">Column 1 of 3 </div>
      </div>
      <div className="row">
        <div className="col-1-3">Column 1 of 3 </div>
        <div className="col-2-3">Column 2 of 3 </div>
      </div>
      <div className="row">
        <div className="col-1-4">Column 1 of 4 </div>
        <div className="col-1-4">Column 1 of 4 </div>
        <div className="col-1-4">Column 1 of 4 </div>
        <div className="col-1-4">Column 1 of 4 </div>
      </div>
      <div className="row">
        <div className="col-1-4">Column 1 of 4 </div>
        <div className="col-1-4">Column 1 of 4 </div>
        <div className="col-2-4">Column 2 of 4 </div>
      </div>
      <div className="row">
        <div className="col-1-4">Column 1 of 4 </div>
        <div className="col-3-4">Column 3 of 4 </div>
      </div>
    </section>
  </div>
);

render(<App />, document.getElementById("app"));
