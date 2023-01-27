import axios from "axios";
import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function galleria({ data }) {
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
        {data.acf.realizacje.map((img) => (
          <Fade key={img.key}>
            <Image
              src={img.full_image_url}
              width={1920}
              height={1080}             
              loading="lazy"
            />
          </Fade>
        ))}
      </Masonry>
    </div>
  );
}
export const getStaticProps = async () => {
  const response = await axios.get(process.env.WP_REALIZATION);

  return {
    props: {
      data: response.data,
    },
    revalidate: 100, 
  };
};

export default galleria;
