import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "heading" },
  "Children Area in React Heading!"
);

const jsxHeading = <h1 id="heading">JSX is clean clode 🚀🚀🚁</h1>;

console.log(heading);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
