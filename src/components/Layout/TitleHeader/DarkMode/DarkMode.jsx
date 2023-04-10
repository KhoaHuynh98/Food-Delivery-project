import React, { useState, useEffect } from "react";
// import darkmode from "../../../../assets/darkmode.jpeg";
import "./DarkMode.css";
function DarkMode() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`DarkMode ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default DarkMode;
