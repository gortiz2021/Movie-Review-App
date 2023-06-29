import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Review from "./components/review/Review";
import Trailer from "./components/trailer/Trailer";

type Movie = {
  id: number;
  imdbId: string;
  title: string;
  releaseDate: Date;
  trailerLink: string;
  poster: string;
  genres: string;
  backdrops: string;
  reveiwIds: string;
}

async function getMovieData() {
  const response = await fetch(
    "http://localhost:8080/api/v1/ReelRater/allMovies"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function app() {

  const movies: Movie = await getMovieData();

  return (
    <div className="py-1">
      <NavBar />
      <Home movies={movies}/>
      <Trailer />
      <Review />
    </div>
  );
}
