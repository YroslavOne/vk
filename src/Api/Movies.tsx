import axios, { AxiosResponse } from 'axios';

const API_KEY = 'SKXX5AA-1764W8B-MZ26WR2-0XZW2PX';
const URL = 'https://api.kinopoisk.dev/v1.4/movie';

interface Movie {
  id: number;
  title: string;
}

interface MovieResponse {
  docs: Movie[];
}

interface Genre {
  name: string;
}

export const Movies = async (
  years: [number, number],
  rating: [number, number],
  page: number,
  genre: string[],
  setError: (error: any) => void
): Promise<MovieResponse | null> => {
  const mapGenres = genre.map((el) => `&genres.name=${el}`).join('');
  try {
    const response: AxiosResponse<MovieResponse> = await axios.get(
      `${URL}?limit=50&rating.kp=${rating[0]}-${rating[1]}&year=${years[0]}-${years[1]}&page=${page}${mapGenres}`,
      {
        headers: {
          'X-API-KEY': API_KEY,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    setError(error);
    return null;
  }
};

export const TheMovie = async (
  id: number,
  setError: (error: any) => void
): Promise<Movie | null> => {
  try {
    const response: AxiosResponse<Movie> = await axios.get(`${URL}/${id}`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    setError(error);
    return null;
  }
};

export const GenersGet = async (
  setError: (error: any) => void
): Promise<Genre[] | null> => {
  try {
    const response: AxiosResponse<Genre[]> = await axios.get(
      'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name',
      {
        headers: {
          'X-API-KEY': API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    setError(error);
    return null;
  }
};

export const MovieByIdGet = async (
  idMovie: number[],
  setError: (error: any) => void
): Promise<MovieResponse | null> => {
  try {
    const params = new URLSearchParams();
    idMovie.forEach((id) => params.append('id', id.toString()));

    const response: AxiosResponse<MovieResponse> = await axios.get(URL, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': API_KEY,
      },
      params: params,
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    setError(error);
    return null;
  }
};

export const fetchMoviesByIds = async (
  ids: number[],
  setError: (error: any) => void
): Promise<MovieResponse | null> => {
  try {
    const params = new URLSearchParams();
    params.append('page', '1');
    params.append('limit', '50');
    ids.forEach((id) => params.append('id', id.toString()));

    const response: AxiosResponse<MovieResponse> = await axios.get(URL, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': API_KEY,
      },
      params: params,
    });
    return response.data;
  } catch (error) {
    setError(error);
    return null;
  }
};
