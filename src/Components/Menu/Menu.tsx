import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
import cn from "classnames";
import { useContextProvider } from "../../Context";

function Menu() {
  const {idFavorites}=useContextProvider()
  return (
    <nav
      className={style["nav"]}
    >
      <NavLink
        exact
        to="/"
        className={({ isActive }) =>
          cn(style["button"], {
            [style.active]: isActive,
          })
        }
      >
        Главная
      </NavLink>
      {idFavorites && (<NavLink
        to="/favorites"
        className={({ isActive }) =>
            cn(style["button"], {
              [style.active]: isActive,
            })
          }
      >
        Избранное
      </NavLink>)}
    </nav>
  );
}
export default Menu;
