import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgID } from "../constent";
import { Simmer } from "./Simmer";
import useResturant from "../utils/useResturant";
import {useDispatch} from "react-redux"
import { addItem } from "../ReduxStore/cartSlice";

export const ResturentMenu = () => {
  const { id } = useParams();
  const dispatch= useDispatch();

  const addItems=(item)=>{
    dispatch(addItem(item))
  };

  
  const menu = useResturant(id);

  return !menu ? (
    <Simmer />
  ) : (
    <div className="flex" >
      <div>
        <h1>Resturant id:{id}</h1>
        <h2 className="font-bold text-2xl ">{menu?.name}</h2>
        <img src={imgID + menu?.cloudinaryImageId} />
        <h3>{menu?.area}</h3>
        <h3>{menu?.city}</h3>
        <h3>{menu?.avgRating} star</h3>
        <h3>{menu?.costForTwoMsg}</h3>
      </div>
      <div className="ml-5">
        <h1 className="font-semibold text-2xl">Menu</h1>
        <ul>
          {Object.values(menu?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}
              <button
                className="bg-green-200 p-1 m-2 "
                onClick={() => addItems(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
