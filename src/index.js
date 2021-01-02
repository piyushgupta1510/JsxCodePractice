import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/Heading";
import Hobbies from "./components/Hobbies";
import Images from "./components/Images";

ReactDOM.render(
  <div>
    <Heading />
    <Hobbies />
    <Images />
  </div>,
  document.getElementById("root")
);
