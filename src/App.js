import React from "react";
import Timer from "./component/Timer";
import Stopwatch from "./component/Stopwatch";
import "./App.css";

function App() {
  return (
    <div className="container-fluid background">
      <div className="row">
        <div className="col-md-6">
          <Timer />
        </div>
        <div className="col-md-6">
          <Stopwatch />
        </div>
      </div>
    </div>
  );
}

export default App;
