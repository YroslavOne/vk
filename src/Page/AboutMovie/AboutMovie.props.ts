export interface MovieProps {
  id: number;
  name: string;
  description: string;
  year: number;
  rating: {
    kp: number;
  };
  poster?: {
    url: string;
  };
  genres: { name: string }[];
}