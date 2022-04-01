import "./App.css";
import { Button } from "./ui/button";
import {Checkbox} from './ui/checkbox/checkbox'

function App() {
  return (
    <div className="App">
      <Button type='button'className='btn'><span>BUTTON</span></Button>
      <Checkbox></Checkbox>
    </div>
  );
}

export default App;
