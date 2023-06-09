import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Trailer = () => {
  return (
    <div className="bg-stone-800 text-white px-2 py-4 m-2">
      <a className="text-red-700" href="">
        <div className="text-sm">
          <FontAwesomeIcon icon={faCirclePlay} className="w-10"/>
        </div>
        
      </a>
    </div>
  );
};

export default Trailer;
