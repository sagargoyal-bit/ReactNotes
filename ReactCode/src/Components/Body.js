import ResturantCard from "./ResturantCard";
import { ResturantList } from "../constent";
import { useState } from "react";

const Body = () => {
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState(ResturantList);

  function filterData(search, ResturantList) {
    let filteredList = ResturantList.filter((list) =>
      list.data.name.includes(search)
    );
    return filteredList;
  }
  return (
    <>
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button
          onClick={() => {
            const data = filterData(search, ResturantList);
            setFilterList(data);
          }}
        >
          search
        </button>
      </div>
      <div className="resturent">
        {filterList.map((resturent) => {
          return (
            <ResturantCard {...resturent.data} key={resturent.data.uuid} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
