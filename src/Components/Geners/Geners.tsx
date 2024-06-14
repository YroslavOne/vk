import { useEffect, useState } from 'react';
import { GenersGet } from '../../Api/Movies';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Controlledheckbox from './ControlledCheckbox/ControlledCheckbox';

function Geners({ setGeners }) {
  const [generList, setGenerList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const genersData = await GenersGet(setError);
      if (genersData) {
        setGenerList(genersData);
      }
    };

    fetchMovie();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!generList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Controlledheckbox items={generList} setChecked={setGeners} />
    </div>
  );
}
export default Geners;
