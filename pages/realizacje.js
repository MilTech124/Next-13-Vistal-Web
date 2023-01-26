import React from "react";
import Masonry from "react-masonry-css";
import { data } from "../data/data";

function galleria() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
       Wszystkie realizacje
      
      </Masonry>
    </div>
  );
}

export default galleria;
