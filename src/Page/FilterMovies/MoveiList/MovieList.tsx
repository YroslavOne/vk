
import { useEffect, useState } from "react";
import { Movies } from "../../../Api/Movies";
import style from "./MovieList.module.css";
import PreviewMovie from "../../../Components/PreviewMovie/PreviewMovie";
import { Pagination } from "@mui/material";
import { MovieListProps, MoviesResponse } from "./MovieList.props";

function MovieList({ options }: MovieListProps) {
  const [data, setData] = useState<MoviesResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await Movies(
        options.year,
        options.rating,
        page,
        options.genreList,
        setError
      );
      if (result) {
        setData(result);
      }
    };

    fetchMovies();
  }, [page, options]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style["move-list"]}>
      <div className={style["container"]}>
        {data.docs.map((elem) => (
          <PreviewMovie
            id={elem.id}
            name={elem.name !== null ? elem.name : "Нет названия у фильма"}
            rating={elem.rating.kp}
            year={elem.year}
            key={elem.id}
            poster={elem.poster?.previewUrl}
          />
        ))}
      </div>
      <Pagination
        count={data?.pages}
        page={page}
        onChange={handleChange}
        size="small"
      />
    </div>
  );
}
export default MovieList;
