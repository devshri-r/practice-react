// {/* <div id="parent">
//     <div id="child">
//         <h1>im h1 tag</h1>
//         <h2>im h1 tag</h2>
//     </div>
// </div>

//  <div id="child2">
//         <h1>im h1 tag</h1>
//         <h2>im h1 tag</h2>
// </div>
// reactElement(Object) => HTML(Browser Understand)
// */}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im h1 tag"),
    React.createElement("h2", {}, "im h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "im h1 tag"),
    React.createElement("h2", {}, "im h2 tag"),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement("h1", {id : "heading" , abc: "xyz"}, "namaste react by react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
