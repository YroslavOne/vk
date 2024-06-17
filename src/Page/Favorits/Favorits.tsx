import { useEffect, useState } from 'react';
import style from './Favorits.module.css';
import { Pagination } from '@mui/material';
import { useContextProvider } from '../../Context';
import { fetchMoviesByIds } from '../../Api/Movies';
import PreviewMovie from '../../Components/PreviewMovie/PreviewMovie';

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
      const result = await fetchMoviesByIds(idFavorites, setError);
      if (result) {
        setData(result);
        console.log(result);
      }
    };

    // const fetchMovies = async () => {
    //  const result = ;
    //    if (result) {
    //              setData(result);

    //    }
    //  });

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     'X-API-KEY': 'SKXX5AA-1764W8B-MZ26WR2-0XZW2PX',
    //   },

    // };

    // fetch(
    //   'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&id=5609795&id=5637342',
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
    fetchMovies();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    // <>hi</>
    <div className={style['move-list']}>
      <div className={style['container']}>
        {data.docs?.map((elem) => (
          <PreviewMovie
            id={elem.id}
            name={elem.name !== null ? elem.name : 'Нет названия у фильма'}
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
