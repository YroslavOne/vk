import { Button, Rating } from '@mui/material';
import style from './PreviewMovie.module.css';
import { PreviewMovieProps } from './PreviewMovie.props';
import { NavLink } from 'react-router-dom';
import { useContextProvider } from '../../Context';

function PreviewMovie({
  id,
  name,
  poster,
  year,
  rating,
}: PreviewMovieProps) {
  const { idFavorites, clickButtonFavorite } = useContextProvider();

  return (
    <div className={style['link']}>
      <NavLink  to={`/movie/${id}`}>
        <div className={style['content']}>
        <h2 className={style['h2']}>{name}</h2>
        <img className={style['img']} src={poster} />
        <time className={style['time']}>{year}</time>
        <Rating className={style['rating']} value={rating / 2} />
        </div>
      </NavLink>
      {idFavorites ? (
        idFavorites.some((elem) => elem === id) ? (
          <Button onClick={() => clickButtonFavorite(id)}>Избранное</Button>
        ) : (
          <Button onClick={() => clickButtonFavorite(id)}>
            Добавить в Избранное
          </Button>
        )
      ) : (
        <Button onClick={() => clickButtonFavorite(id)}>
          Добавить в Избранное
        </Button>
      )}
    </div>
  );
}
export default PreviewMovie;
