import { Rating } from "@mui/material";
import style from "./PreviewMovie.module.css";
import { PreviewMovieProps } from "./PreviewMovie.props";
import { NavLink } from "react-router-dom";

function PreviewMovie({ key, id, name, poster, year, rating  }: PreviewMovieProps) {
  return (
    <NavLink key={key} className={style["link"]} to={`/movie/${id}`}>
      <h2 className={style["h2"]}>{name}</h2>
      <img className={style["img"]} src={poster} />
      <time className={style["time"]}>{year}</time>
      <Rating className={style["rating"]} value={rating / 2} />
    </NavLink>
  );
}
export default PreviewMovie
