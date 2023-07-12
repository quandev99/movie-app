import React from "react";

const CreditsItem = ({ item }) => {
  const { profile_path, name, character } = item;
  return (
    <div className="cast-item mb-5">
      <img
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        className=" h-[250px] w-full rounded-lg border-2 border-[#252229] object-cover "
        alt=""
      />
      <div className="px-2">
        <h3 className="mt-4 text-xl font-medium text-white">{name}</h3>
        <p className="text-md ">{character}</p>
      </div>
    </div>
  );
};

export default CreditsItem;
