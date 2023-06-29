import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
config.autoAddCss = false;

export default async function Home({ movies }) {

  return (
    <div className="bg-stone-800 text-white px-2 py-4 m-2">
      {/* <button className="text-red-700 text-3xl">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </button> */}

      <div className="flex overflow-x-auto">
        {movies.map((movie) => (
          <div key={movie.imdbId} className="p-4">    
            <Link href={movie.trailerLink}>
              {movie.title}
            </Link>         
          </div>
        ))}
      </div>

      {/* <button className="text-red-700 text-red-700 text-3xl">
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </button> */}
    </div>
  );
}
