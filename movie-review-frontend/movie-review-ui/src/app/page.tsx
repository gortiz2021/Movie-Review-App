import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Review from "./components/review/Review";
import Trailer from "./components/trailer/Trailer";

export default function app() {
  return (
    <div className="py-1">
      <NavBar />
      <Home />
      <Trailer />
      <Review />
    </div>
  );
}
