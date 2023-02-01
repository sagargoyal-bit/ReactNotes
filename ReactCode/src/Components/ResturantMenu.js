import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {imgID} from "../constent";
import { Simmer } from "./Simmer";

export const ResturentMenu=()=>{
    const {id} = useParams();
    const [menu,setMenu]=useState(null)
    useEffect(()=>{
        menuApiCall();
    },[]);

    async function menuApiCall(){

        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/v4/full?lat=26.778832&lng=75.875169&menuId=${id}`
        );
        const jsonData =await data.json();
        setMenu(jsonData.data);
    }
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
}