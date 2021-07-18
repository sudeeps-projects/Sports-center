import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ active, set }) {
  const backgroundColor = React.useRef(null);
  const html = `<ul>
  <a href="/pricings">
    <li>Pricings</li>
  </a>
  <a href="/sports">
    <li>Sports</li>
  </a>
  <a href="/login">
    <li>Login</li>
  </a>
  <a href="/cafe">
    <li>Cafe</li>
  </a>
</ul>`;
  React.useEffect(() => {
    async function changeColor() {
      console.log("hello");

      backgroundColor.current.classList.toggle("active");

      if (backgroundColor.current.classList.contains("active")) {
        backgroundColor.current.innerHTML = `${html}`;
      } else {
        backgroundColor.current.innerHTML = "";
      }
    }

    changeColor();
  }, [active]);

  return (
    <div className="header">
      <nav>
        <div className="logo"></div>
        <div className="nav-right">
          <ul>
            <a href="/pricings">
              <li>Pricings</li>
            </a>
            <a href="/sports">
              <li>Sports</li>
            </a>
            <a href="/login">
              <li>Login</li>
            </a>
            <a href="/cafe">
              <li>Cafe</li>
            </a>
          </ul>
        </div>
      </nav>
      <div className="nav-menu"></div>
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label
        htmlFor="navi-toggle"
        className="navigation__button"
        onClick={() => {
          if (!active) {
            set(true);
          } else if (active) {
            set(false);
          }
        }}
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <div className="background-color active" ref={backgroundColor}>
        <ul>
          <li>Pricings</li>
          <li>Sports</li>
          <li>Login</li>
          <li>Cafe</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
