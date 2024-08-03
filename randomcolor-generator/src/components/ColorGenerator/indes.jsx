import { useState } from "react";
import "./styles.css";

export default function RandomColorGenerator() {
  const [hexColor, setHexColor] = useState([]);
  const [rgbColor, setRgbColor] = useState([]);
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function randomColorHandler(type) {
    let arr = [];
    if (type === "HEX") {
      for (let i = 0; i < 6; i++) {
        arr.push(hexArr[Math.floor(Math.random() * 16)]);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random() * 255));
      }
    }

    return arr;
  }

  function generateHexColor() {
    setRgbColor([]);
    const hexColorArr = randomColorHandler("HEX");
    setHexColor(hexColorArr.join(""));
  }

  function generateRGBColor() {
    setHexColor([]);
    const RGBColor = randomColorHandler();
    console.log(RGBColor);
    setRgbColor(RGBColor);
  }

  return (
    <div>
      <div
        className="container-item"
        style={{
          backgroundColor:
            hexColor.length > 1
              ? `#${hexColor}`
              : `rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`,
        }}
      >
        <div>
          <h1>Random Color Generator</h1>
        </div>
        <div>
          <h1>
            {rgbColor.length > 1
              ? `RGB ${rgbColor[0]},${rgbColor[1]},${rgbColor[2]}`
              : `HEX Color # ${hexColor}`}
          </h1>
        </div>
        <div>
          <button className="button-style" onClick={generateHexColor}>
            Random Color
          </button>
          <button className="button-style" onClick={generateHexColor}>
            Hex Color
          </button>
          <button className="button-style" onClick={generateRGBColor}>
            RGB Color
          </button>
        </div>
      </div>
    </div>
  );
}
