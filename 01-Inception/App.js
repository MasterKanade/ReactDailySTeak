/* 
How to insert nested HTML tag into React.
<div id="parent">
<div id="child">
<h1></h1>
</div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      {},
      "Hi I'm grandchildren of Parent and children of child"
    )
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
