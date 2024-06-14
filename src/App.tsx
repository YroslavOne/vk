import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";
import { Route, Router, Routes } from "react-router";
import MovieList from "./Page/FilterMovies/MoveiList/MovieList";
import AboutMovie from "./Page/AboutMovie/AboutMovie";
import FilterMovies from "./Page/FilterMovies/FilterMovies";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FilterMovies />} />
      <Route path="/movie/:id" element={<AboutMovie />} />
    </Routes>
  );
};

export default App;
