import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>custom App</h1>
    </div>
  );
}

// incorrect syntax
// const newElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit google',
// }

// correct syntax
const customElement = (
  <a href="https://www.google.com" target="_blank">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://cricbuzz.com', target:'_blank'},
  'cricbuzz',
  
  customElement
)


ReactDOM.createRoot(document.getElementById("root")).render
(
	
  <>
  <App/>
    {customElement}
  <MyApp/>
  </>
);
