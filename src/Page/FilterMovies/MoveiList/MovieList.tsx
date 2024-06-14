// import axios from "axios";
import { useEffect, useState } from "react";
import { Movies } from "../../../Api/Movies";
import style from "./MovieList.module.css";
import PreviewMovie from "../../../Components/PreviewMovie/PreviewMovie";
import { Pagination } from "@mui/material";

function MovieList({ years }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  console.log(years);
  const handleChange = (e, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await Movies(years, 7, page, setError);
      if (result) {
        setData(result);
      }
    };

    fetchMovies();
  }, [page, years]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={style["container"]}>
        {data.docs.map((elem) => (
          <PreviewMovie
            id={elem.id}
            name={elem.name}
            rating={elem.rating.kp}
            year={elem.year}
            key={elem.id}
            poster=""
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
