import { useEffect, useState } from 'react';
import { GenersGet } from '../../Api/Movies';
import Controlledheckbox from './ControlledCheckbox/ControlledCheckbox';
import style from './Geners.module.css';

function Geners() {
  const [genreList, setGenreList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const genersData = await GenersGet(setError);
      if (genersData) {
        setGenreList(genersData);
      }
    };

    fetchMovie();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!genreList) {
    return <div>Loading...</div>;
  }

  return <Controlledheckbox items={genreList} />;
}
export default Geners;
