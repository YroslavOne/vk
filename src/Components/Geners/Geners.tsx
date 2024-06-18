import { useEffect, useState } from "react";
import { GenersGet } from "../../Api/Movies";
import Controlledheckbox from "./ControlledCheckbox/ControlledCheckbox";

interface Item {
  name: string;
}

function Geners() {
  const [genreList, setGenreList] = useState<Item[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

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
