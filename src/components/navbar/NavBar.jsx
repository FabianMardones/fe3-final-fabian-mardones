import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { useGlobalReduceStates } from "../../utils/GlobalContextReducer";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const {state, dispatch} = useGlobalReduceStates()

  console.log(state.darkMode);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${state.darkMode && "dark"}`}>
      <div className="nav_logo">
        <h3 className={`${state.darkMode && "dark"}`}>
          <strong>D</strong>H Odonto
        </h3>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <NavLink className={`${state.darkMode && "dark"}`} to={"/"} onClick={handleCloseMenu}>
          Home
        </NavLink>
        <NavLink className={`${state.darkMode && "dark"}`} to={"/contact"} onClick={handleCloseMenu}>
          Contact
        </NavLink>
        <NavLink className={`${state.darkMode && "dark"}`} to={"/favs"} onClick={handleCloseMenu}>
          Favs
        </NavLink>{" "}
        <button className={`toggleBtnDarkMode ${state.darkMode && "dark"}`} onClick={() => dispatch({type: "CHANGE_MODE"})}>
          {state.darkMode ? "🌞" : "🌙"}
        </button>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
