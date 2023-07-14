import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const MovieCartSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-cart bg-slate-800">
      <LoadingSkeleton
        width="100%"
        height="250px"
        className="mb-5 rounded-xl"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3>
          <LoadingSkeleton
            width="100%"
            height="10px"
            radius="8px"
            className="mb-5"
          ></LoadingSkeleton>
        </h3>
        <div className="flex justify-between mb-10 text-sm flex-item">
          <span>
            <LoadingSkeleton
              width="45px"
              height="10px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton
              width="40px"
              height="10px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          width="100%"
          height="40px"
          radius="8px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};

export default MovieCartSkeleton;
