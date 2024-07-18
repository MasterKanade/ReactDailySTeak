import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi I'm h1 tag"),
    React.createElement("h2", {}, "Hi I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I'm h1 tag from child2"),
    React.createElement("h2", {}, "Hi I am h2 tag from child2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// this above code becomes ugly and so hard to read this stuff.
// therefore, the JSX comes into the picture for the same.
