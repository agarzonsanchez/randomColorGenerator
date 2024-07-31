import { useState } from "react";

export default function RandomColorGenerator() {
  const [hexColor, setHexColor] = useState([]);
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function randomColorHandler() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(hexArr[Math.floor(Math.random() * 16)]);
    }
    return arr;
  }

  function generateHexColor() {
    const hexColorArr = randomColorHandler();
    setHexColor(hexColorArr.join(""));
  }
  return (
    <div>
      <div style={{ backgroundColor: `#${hexColor}` }}>
        <div>
          <h1>Random Color Generator</h1>
        </div>
        <div>
          <h1>HEX Color #{hexColor}</h1>
        </div>
        <div>
          <button onClick={generateHexColor}>Random Color</button>
          <button onClick={generateHexColor}>Hex Color</button>
          <button>RGB Color</button>
        </div>
      </div>
    </div>
  );
}
