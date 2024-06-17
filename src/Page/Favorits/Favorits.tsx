import { useEffect, useState } from "react";
import style from "./Favorits.module.css";
import { Pagination } from "@mui/material";
import { useContextProvider } from "../../Context";
import { TheMovie } from "../../Api/Movies";

function Favorits() {
  const { idFavorites } = useContextProvider();
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (e, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await TheMovie('5637342, 5609795', setError);
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
export default Favorits;
