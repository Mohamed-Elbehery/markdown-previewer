import { useEffect, useState } from "react";

const UseLocalStorage = () => {
  const [code, setCode] = useState("## Hello");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');

  useEffect(() => {
    if (localStorage.preview && localStorage.markdown) {
      setCode(JSON.parse(localStorage.markdown).value);
      setCompiled(JSON.parse(localStorage.preview).value);
    }
  }, []);

  useEffect(() => {
    if (!localStorage.preview && !localStorage.markdown) {
      localStorage.setItem("preview", JSON.stringify({ value: "" }));
      localStorage.setItem("markdown", JSON.stringify({ value: "" }));
    }
  }, []);

  return { code, setCode, compiled, setCompiled };
};

export default UseLocalStorage;
