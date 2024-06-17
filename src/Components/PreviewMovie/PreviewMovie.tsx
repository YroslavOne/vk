import { Button, Rating } from "@mui/material";
import style from "./PreviewMovie.module.css";
import { PreviewMovieProps } from "./PreviewMovie.props";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useContextProvider } from "../../Context";

function PreviewMovie({
  key,
  id,
  name,
  poster,
  year,
  rating,
}: PreviewMovieProps) {
  const { idFavorites, setIdFavorites } = useContextProvider();
  function clickButtonFavorite(id: number) {
    setIdFavorites([...idFavorites, id]);
  }
  console.log(idFavorites)

  return (
    <div className={style["link"]}>
      <NavLink key={key} to={`/movie/${id}`}>
        <h2 className={style["h2"]}>{name}</h2>
        <img className={style["img"]} src={poster} />
        <time className={style["time"]}>{year}</time>
        <Rating className={style["rating"]} value={rating / 2} />
      </NavLink>
      {idFavorites.some((elem) => elem === id) ? (
        <Button onClick={(e) => clickButtonFavorite(id)}>Избранное</Button>
      ) : (
        <Button>Добавить в Избранное</Button>
      )}
    </div>
  );
}
export default PreviewMovie;
