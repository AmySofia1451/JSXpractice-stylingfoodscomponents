import React from "react";
import Heading from "./Heading.jsx";
import List from "./List.jsx";

const customStyle = {
  color: "red",
  fontSize: "40px",
  fontWeight: "bold"
};

function App() {
  return (
    <div>
      <Heading />
      <List />
      <div>
        <img
          alt="vegan bacon"
          className="bacon"
          src="https://somevegangirl.com/wp-content/uploads/2016/01/Benevolent-Bacon_7092-JPG.jpg"
        ></img>
        <img
          alt="spaghetti"
          className="spaghetti"
          src="https://tse3.mm.bing.net/th?id=OIP.jat4-t6sFjBXGchSmuOMrAHaJn&pid=Api"
        ></img>
        <img
          alt="sushi"
          className="sushi"
          src="https://tse3.mm.bing.net/th?id=OIP.rp5x8D_j8fvW8-2nB28P8gHaEK&pid=Api"
        ></img>
      </div>
      <p style={customStyle}> Let's Stylize. </p>
    </div>
  );
}
export default App;
