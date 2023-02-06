import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgID } from "../constent";
import { Simmer } from "./Simmer";
import useResturant from "../utils/useResturant";

export const ResturentMenu = () => {
  const { id } = useParams();
  
  const menu = useResturant(id);

  return !menu ? (
   <Simmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Resturant id:{id}</h1>
        <h2>{menu?.name}</h2>
        <img src={imgID + menu?.cloudinaryImageId} />
        <h3>{menu?.area}</h3>
        <h3>{menu?.city}</h3>
        <h3>{menu?.avgRating} star</h3>
        <h3>{menu?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
