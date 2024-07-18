import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 className="heading" tabIndex={5}>
    Hello this is valid react element
  </h1>
);

// React Componenet
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1 id="heading">This is perfect react element or JSX element</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
