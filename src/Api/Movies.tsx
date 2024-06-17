import axios from "axios";

const API_KEY = "G84HAB6-QXB4J2Z-HF6Z8P8-H3GZQYY";
const URL = "https://api.kinopoisk.dev/v1.4/movie";

export const Movies = async (years, rating, page, genre, setError) => {
  const mapGenres = genre.map((el) => `&genres.name=${el}`).join("");
  try {
    const response = await axios.get(
      `${URL}?limit=50&rating.kp=${rating[0]}-${rating[1]}&year=${years[0]}-${years[1]}&page=${page}${mapGenres}`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    setError(error);
  }
};

export const TheMovie = async (id: number, setError) => {
  try {
    const response = await axios.get(`${URL}/${id}`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    setError(error);
  }
};

export const GenersGet = async (setError) => {
  try {
    const response = await axios.get(
      "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name",
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    setError(error);
  }
};

export const MovieByIdGet = async (idMovie, setError) => {
  try {
    const response = await axios.get(`${URL}?id=${idMovie}`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    setError(error);
  }
};
