import axios from 'axios';

const API_KEY = '50VBV0E-W9Q4CDD-MFW6P5C-NJ08GSA';
const URL = 'https://api.kinopoisk.dev/v1.4/movie';

export const Movies = async (years, rating, page, genre, setError) => {
  try {
    const response = await axios.get(URL, {
      headers: {
        'X-API-KEY': API_KEY,
      },
      params: {
        limit: '50',
        'rating.kp': rating,
        year: `${years[0]}-${years[1]}`,
        page: page,
        // 'genres.name': genre,
      },
    });
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
        'X-API-KEY': API_KEY,
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
  }
};
