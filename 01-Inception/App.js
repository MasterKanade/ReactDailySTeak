import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div id="container">
      <h1 id="title">Title of the page</h1>
    </div>
  );
};

const HeadingComponent = () => {
  const number = 25000000;
  return (
    <div id="container">
      {/* very few people know this way of calling component */}
      {Title()}
      <Title />
      <Title></Title>
      <h2 id="heading">An Amazing Way to Call Component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
