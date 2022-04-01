import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button type="button" className="btn">
        <span>BUTTON</span>
      </Button>
      <Checkbox></Checkbox>
      <Input></Input>
    </div>
  );
}

export default App;
