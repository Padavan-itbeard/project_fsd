import { render } from "react-dom";
import { Counter } from "./components/Counter";

render(
  <div>
    <h1>Hello World!!</h1>
    <Counter />
  </div>,
  document.getElementById("root")
);
