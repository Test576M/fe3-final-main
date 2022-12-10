import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;
  const changeTheme = () => { if (isDarkMode) { setLightTheme(); } else { setDarkTheme(); }};
//la logica del cambio de tema la implementamos aca tmb

  return (
    <nav>
      <ul>
      <li> <Link to={"/Home"}>Inicio</Link> </li>
      <li> <Link to={"/contact"}>Contacto</Link> </li>
      <li> <Link to={"/favs"}>Favoritos</Link> </li>
      <button  className={`botonLightDarkTema${isDarkMode ? "light" : "dark"}`}  onClick={changeTheme}>{isDarkMode ? "🔆" : "🌙"} </button>  
        </ul>
    </nav>
  );
};

export default Navbar;
