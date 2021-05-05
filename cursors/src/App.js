import "./App.css";
import { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { script as scriptTemplate } from "./scriptTemplate";
import CodeMirror from "./CodeMirror";
import cursors from "./cursors";
import cx from "classnames";
function App() {
  const [selectedCursor, setCursor] = useState(0);
  const [selectedColor, setColor] = useState("#000000");
  const [sizeCursor, setSize] = useState(20);
  const [idCursor] = useState("cursor");

  function onColorChange({ target: { value } }) {
    setColor(value);
  }

  function onSizeChange({ target: { value } }) {
    setSize(value);
  }

  return (
    <div className="App">
      <div>
        <input
          onChange={onColorChange}
          type="color"
          id="head"
          name="head"
          value={selectedColor}
        />
      </div>
      <div>
        <input
          onChange={onSizeChange}
          type="range"
          min="10"
          max="100"
          value={sizeCursor}
        />
        {sizeCursor} px
      </div>
      <div className="svg-list">
        {cursors.map((image, index) => (
          <CursorImage
            {...{
              key: index + selectedColor + sizeCursor + selectedCursor,
              index,
              image,
              color: selectedColor,
              size: sizeCursor,
              selectedCursor,
              onClick: () => {
                setCursor(index);
              },
            }}
          />
        ))}
      </div>
      <div>
        <CursorImageCode
          {...{
            color: selectedColor,
            size: sizeCursor,
            image: cursors[selectedCursor],
            idCursor,
          }}
        />
        <CodeMirror
          value={ReactDOMServer.renderToString(
            <CursorImageCode
              {...{
                color: selectedColor,
                size: sizeCursor,
                image: cursors[selectedCursor],
                idCursor,
              }}
            />,
            null,
            2
          )}
        />
      </div>
    </div>
  );
}

function CursorImage({ image, index, color, size, selectedCursor, onClick }) {
  const SvgComponent = image;
  return (
    <div
      onClick={onClick}
      className={cx("svg-list__item", {
        "svg-list__item--active": selectedCursor === index,
      })}
    >
      <SvgComponent {...{ color, size }}></SvgComponent>
      <div   className="svg-list__cursor-name">{index}</div>
    </div>
  );
}

function CursorImageCode({ color, size, image, idCursor }) {
  const SvgComponent = image;
  useScript(scriptTemplate(idCursor));
  return (
    <div>
      <div style={{ position: "absolute" }} id={idCursor}>
        <SvgComponent {...{ color, size }}></SvgComponent>;
      </div>
    </div>
  );
}

function useScript(scriptBody) {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = scriptBody;
    window.document.body.appendChild(script);

    return () => {
      window.document.body.removeChild(script);
    };
  }, [scriptBody]);
}

export default App;
