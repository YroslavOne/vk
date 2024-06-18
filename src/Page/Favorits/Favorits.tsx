import { useEffect, useState } from "react";
import style from "./Favorits.module.css";
import { Pagination } from "@mui/material";
import { useContextProvider } from "../../Context";
import { fetchMoviesByIds } from "../../Api/Movies";
import PreviewMovie from "../../Components/PreviewMovie/PreviewMovie";
import { MoviesResponse } from "../FilterMovies/MoveiList/MovieList.props";

function Favorits() {
  const { idFavorites } = useContextProvider();
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<MoviesResponse | null>([]);
  const [page, setPage] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await fetchMoviesByIds(idFavorites, setError);
      if (result) {
        setData(result);
      }
    };
    fetchMovies();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style["move-list"]}>
      <div className={style["container"]}>
        {data.docs?.map((elem) => (
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
export default Favorits;
