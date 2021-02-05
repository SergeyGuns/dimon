import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App() {
  const [currOpenedDropDown, setOpenedDropDown] = React.useState(null);

  return (
    <nav className="Menu">
      <div
        onClick={() =>
          currOpenedDropDown === 0
            ? setOpenedDropDown(null)
            : setOpenedDropDown(0)
        }
        className="Menu__item"
      >
        Collection
        {currOpenedDropDown === 0 && (
          <div className="Menu__drop-down">
            <div className="Menu__drop-down-items">
              <div className="Menu__drop-down-item">Drop item 1</div>
              <div className="Menu__drop-down-item">Drop item 1</div>
              <div className="Menu__drop-down-item">Drop item 1</div>
              <div className="Menu__drop-down-item">Drop item 1</div>
            </div>
          </div>
        )}
      </div>
      <div className="Menu_item">About</div>
      <div className="Menu_item">Contacts</div>
    </nav>
  );
}

export default App;
