import React, { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "use-local-storage";
import { BiSearch } from "react-icons/bi";
import New from "./Components/New";

const All = () => {
  const [input, setInput] = useState();
  const [data, setData] = useState([
    {
      name: "hello",
    },
    {
      name: "hi",
    },
    {
      name: "goodbye",
    },
    {
      name: "jack",
    },
    {
      name: "samuel",
    },
    {
      name: "oops",
    },
    {
      name: "bj flowing",
    },
  ]);
  const preference = window.matchMedia("(prefered-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useLocalStorage("isDark",preference);
  const handleChange = () => {
    setIsDark(!isDark);
  };

  // local storage
  const theme = localStorage.setItem("theme", isDark)
  const newTheme = localStorage.getItem("theme")
  console.log(newTheme)

  return (
    <>
    <div className="allBody" dark-theme={isDark ? "dark" : "light"}>
      <div className="allWrapper">
        <div className="allSearch">
          <div className="center">
            <div className="icon">
              <BiSearch color="black" size={20} />
            </div>
            {/* <input type="text" placeholder='search...' value={input} onChange={value}/> */}
          </div>
        </div>
        <div className="allResult">
          {data.map((e, i) => (
            <div className="search" key={i}>
              {e.name}
            </div>
          ))}
          <New />
          <div className="switch">
            <input
              type="checkbox"
              className="toggle"
              onChange={handleChange}
              checked={isDark}
              id="check"
            />
            <label htmlFor="check">{isDark ? "Light Mode" : "Dark Mode"}</label>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default All;
