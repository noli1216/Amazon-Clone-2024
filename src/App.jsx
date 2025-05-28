import React from "react";
import Routing from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/Amazon-Clone-2024">
      <Routing />
    </BrowserRouter>
  );
}
export default App;

