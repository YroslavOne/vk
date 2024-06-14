import style from "./FilterMovies.module.css";
import MovieList from "./MoveiList/MovieList";
import RangeSlider from "../../Components/Slider/RangeSlider";
import { useState } from "react";

function FilterMovies() {
  const [year, setYear] = useState([1990, 2024]);

  return (
    <div className={style["container"]}>
      <h1 className={style["title"]}>Kinopoisk</h1>
      <RangeSlider setYear={setYear} />
      <MovieList year={year} />
    </div>
  );
}
export default FilterMovies;
