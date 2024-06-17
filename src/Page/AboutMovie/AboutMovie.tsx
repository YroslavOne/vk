import { Rating } from "@mui/material";
import styles from "./AboutMovie.module.css";
import { TheMovie } from "../../Api/Movies";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { Movie } from "./Movie";
import { Link } from "react-router-dom";
import { MovieProps } from "./AboutMovie.props";

function AboutMovie() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [error, setError] = useState<Error | null>(null);
  // let rating = movie.rating.kp === 0 ? 0 : movie.rating.kp / 2;

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await TheMovie(id, setError);
      if (movieData) {
        setMovie(movieData);
      }
    };

    fetchMovie();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log(movie);

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <Link to="/" className={styles["back"]}>
          back
        </Link>
        <img className={styles["image"]} src={movie.poster?.url} />
        <div className={styles["information"]}>
          <h2 className={styles["title"]}>{movie.name}</h2>
          <p className={styles["description"]}>{movie.description}</p>
          <div>
            <div>Рейтинг</div>
            <Rating value={movie.rating.kp / 2} />
          </div>

          <div className={styles["date"]}>Год производства: {movie.year}</div>

          <div className={styles["genre"]}>
            <div className={styles["genre-title"]}> Жанры</div>
            <ul>
              {movie.genres.map((genre) => (
                <li className={styles["li"]}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMovie;
