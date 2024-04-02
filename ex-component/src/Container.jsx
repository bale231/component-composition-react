import { useState } from "react";

export const Container = ({ title, children }) => {
  const [opened, setOpened] = useState(false);

  function handleToggle() {
    setOpened((y) => !y);
  }

  return (
    <div className="app">
      <div className="app-title">
        {title} <button onClick={handleToggle}>Menu</button>
      </div>
      <div id="container-all" className={!opened ? "open-menu" : "hidden-menu"}>
        {children}
      </div>
    </div>
  );
};
