// Created a h1 tag in the react and have 3 parameters:
// 1. tagName 2. object consiste attribute for the tag 3. content for the respective tag.
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From React!"
);
// Created a root where all the react code will be run
// Root is the top most element in the React hierarchy.
const root = ReactDOM.createRoot(document.getElementById("root"));
// injected heading element into the react by using render method
root.render(heading);
