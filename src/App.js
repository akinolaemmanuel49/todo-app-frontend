import React from "react";
import AppBar from "./components/AppBar";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="background">
          <AppBar name="John Doe" />
          <div className="container"><p><div className="content">

          </div>
          </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
