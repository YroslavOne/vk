import AboutMovie from "./Page/AboutMovie/AboutMovie";
import FilterMovies from "./Page/FilterMovies/FilterMovies";
import Favorits from "./Page/Favorits/Favorits";
import Menu from "./Components/Menu/Menu";
import {Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Menu />
    <Routes>
      <Route path="/" element={<FilterMovies />} />
      <Route path="/movie/:id" element={<AboutMovie />} />
      <Route path="/favorites" element={<Favorits />} />
    </Routes>
    </div>
  );
};

export default App;
