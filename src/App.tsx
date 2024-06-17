import { Route, Routes } from "react-router";
import AboutMovie from "./Page/AboutMovie/AboutMovie";
import FilterMovies from "./Page/FilterMovies/FilterMovies";
import Favorits from "./Page/Favorits/Favorits";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FilterMovies />} />
      <Route path="/movie/:id" element={<AboutMovie />} />
      <Route path="/favorites" element={<Favorits />} />
    </Routes>
  );
};

export default App;
