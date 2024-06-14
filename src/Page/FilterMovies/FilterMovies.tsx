import style from './FilterMovies.module.css';
import MovieList from './MoveiList/MovieList';
import RangeSlider from '../../Components/Slider/RangeSlider';
import { useState } from 'react';
import Geners from '../../Components/Geners/Geners';

function FilterMovies() {
  const [year, setYear] = useState([1990, 2024]);
  const [rating, setRating] = useState([0, 10]);
  const [generList, setGenerList] = useState([]);
  const [openGenerList, setOpenGenerList] = useState(false);

  console.log(generList);

  return (
    <div className={style['container']}>
      <h1 className={style['title']}>Kinopoisk</h1>
      <RangeSlider setYear={setYear} name={'year'} start={1990} end={2024} />
      <RangeSlider setYear={setRating} name={'rating'} start={0} end={10} />
      {!setOpenGenerList && <Geners setGeners={setGenerList} />}
      <MovieList years={year} rating={rating} />
    </div>
  );
}
export default FilterMovies;
