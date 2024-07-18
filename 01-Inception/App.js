import React from "react";
import ReactDOM from "react-dom/client";

const title = <>The Title</>;

const HeadingComponent = () => {
  const number = 25000000;
  return (
    <div id="container">
      <h1>
        <span id="title">Rendered: {title}</span>
      </h1>
      <h2 id="heading">
        The best example of injecting React element OR JSX element into the
        componenet
      </h2>
      <h3 id="heading">
        you can put any javascript expression inside the curly braces in jsx:
        direct expressions like 200 + 300 : {200 + 300}
        <p>
          The variable declared inside the function as a number valued: {number}
        </p>
      </h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
