import style from "./FilterMovies.module.css";
import MovieList from "./MoveiList/MovieList";
import RangeSlider from "../../Components/Slider/RangeSlider";
import {  useState } from "react";
import Geners from "../../Components/Geners/Geners";
import { useContextProvider  } from "../../Context";

interface optionsProps {
    year: number[];
    rating: number[];
    genreList: string[];
}


function FilterMovies() {
  const {
    setYear,
    setRating,
    toggleGenreList,
    openGenreList,
    year,
    rating,
    genreList,
  } = useContextProvider (); 

  const [options, setOptions] = useState<optionsProps>({
    year: year,
    rating: rating,
    genreList: genreList,
  });

  const handleFilter = () => {
    setOptions({ year, rating, genreList });
    console.log({ year, rating, genreList });
  };
  console.log({ options });


  return (
    <div className={style["container"]}>
      <h1 className={style["title"]}>Кинопоиск</h1>
      <div className={style["filter"]}>
        <RangeSlider setForElem={setYear} name={"Год"} start={1990} end={2024} />
        <RangeSlider setForElem={setRating} name={"Рейтинг"} start={0} end={10} />
        <button onClick={toggleGenreList}> Жанры</button>
        <button onClick={handleFilter}> отфильтровать</button>
        {openGenreList && <Geners />}
      </div>
      <MovieList options={options} />
    </div>
  );
}

export default FilterMovies;