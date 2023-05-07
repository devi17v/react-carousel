import React from "react";

const Gallery = ({ imgArr, current }) => {
  return (
    <>
      {imgArr.map(
        (pic, index) =>
          current === index && (
            <div key={index}>
              <img src={pic} alt="scenaries" />
            </div>
          )
      )}
    </>
  );
};

export default Gallery;
