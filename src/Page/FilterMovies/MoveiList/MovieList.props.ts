export interface MovieListProps {
  options: {
    year: number[];
    rating: number[];
    genreList: string[];
  };
}

export interface Movie {
  id: number;
  name: string | null;
  rating: {
    kp: number;
  };
  year: number;
  poster?: {
    previewUrl: string;
  };
}

export interface MoviesResponse {
  docs: Movie[];
  pages: number;
}