import React from "react";
import ReactDOM from "react-dom/client";

// Title of the web page
const Title = () => {
  return <h1 id="title">Jack Sparrow 🚩🏴‍☠️🚩</h1>;
};

// The Component Composition
// Using another componenet inside the component is called Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 id="heading">Jack Sparrow Entered Into The House 🚤⛵🛥🛳🚢</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
