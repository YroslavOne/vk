import axios from "axios";

const URL = "https://api.kinopoisk.dev/v1.4/movie";

export const Movies = async (yearStart, yaerEnd, rating, page, setError) => {
  try {
    const response = await axios.get(URL, {
      headers: {
        "X-API-KEY": "SKXX5AA-1764W8B-MZ26WR2-0XZW2PX",
      },
      params: {
        limit: "50",
        "rating.kp": rating,
        "year.start": yearStart,
        "year.end": yaerEnd,
        page: page,
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
        "X-API-KEY": "SKXX5AA-1764W8B-MZ26WR2-0XZW2PX",
      },
    });
    return response.data;
  } catch (error) {
    setError(error);
  }
};