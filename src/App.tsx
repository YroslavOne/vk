import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.kinopoisk.dev/v1.4/movie',
          {
            headers: {
              'X-API-KEY': 'SKXX5AA-1764W8B-MZ26WR2-0XZW2PX',
            },
            params: {
              limit: '50',
              'rating.kp': '0-10',
              'year.start': '1990',
              'year.end': '1990',
            },
          }
        );
        setData(response.data);
        console.log(response.data.docs);
        console.log(response.data.docs[0].poster.previewUrl);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Kinopoisk Data</h1>
      <div>
        {data.docs.map((elem) => (
          <div key={elem.id}>
            <h2>{elem.name}</h2>
            {/* <h2>{elem.poster?.previewUrl}</h2> */}
            <img src={elem.poster?.previewUrl} />
            {/* <img src=/> */}
            <time>{elem.year}</time>
            <div>{elem.rating.kp}</div>
          </div>
        ))}
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default App;
