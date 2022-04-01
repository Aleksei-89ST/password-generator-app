import React from "react";
import { Button } from "./ui/button/button";
import { Checkbox } from "./ui/checkbox/checkbox";
import { Input } from "./ui/input/input";
import {Select} from './ui/select/select';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Button type="button">
        <span>BUTTON</span>
      </Button>
      <Checkbox></Checkbox>
      <Input></Input>
      <Select></Select>
    </div>
  );
}

export default App;
