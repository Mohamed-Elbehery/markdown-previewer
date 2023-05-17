import "./App.css";
import { useState } from "react";
import { marked } from "marked";
import UseLocalStorage from "./useLocalStorage";

const App = () => {
  const [hide, hidePreview] = useState(true);
  const { setCode, setCompiled, code, compiled } = UseLocalStorage();

  const openMD = () => {
    hidePreview(true);
  };

  const openPreview = () => {
    hidePreview(false);
  };

  const handleChange = (e) => {
    // Set Mark Down
    setCode(e.target.value);
    localStorage.setItem("markdown", JSON.stringify({ value: e.target.value }));

    // Set Preview
    setCompiled(marked.parse(e.target.value));
    localStorage.setItem(
      "preview",
      JSON.stringify({ value: marked.parse(e.target.value) })
    );
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className={`${hide ? "btn" : ""}`}>
            MarkDown
          </button>
          <button onClick={openPreview} className={`${hide ? "" : "btn"}`}>
            Preview
          </button>
        </div>
        {hide ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : (
          <div>
            <textarea value={compiled} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
