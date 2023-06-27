import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

async function getMovieData() {
  const response = await fetch(
    "http://localhost:8080/api/v1/ReelRater/allMovies"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function Home() {
  const movies = await getMovieData();

  return (
    <div className="bg-stone-800 text-white px-2 py-4 m-2">
      <button className="text-red-700 text-3xl">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </button>
      <div className="flex">
        {movies.map((movie) => (
          <h4 key={movie.imdbId} className="p-4">{movie.title}</h4>
        ))}
      </div>

      <button className="text-red-700 text-red-700 text-3xl">
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </button>
    </div>
  );
}
