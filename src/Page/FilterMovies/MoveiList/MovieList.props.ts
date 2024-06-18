export interface MovieListProps {
  options: {
    year: [number, number];
    rating: [number, number];
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
