import ResturantCard from "./ResturantCard";
// import { ResturantList } from "../constent";
import { useEffect, useState } from "react";
import { Simmer } from "./Simmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [search, setSearch] = useState("");
  const [allRestroList, setAllrestroList] = useState([]);
  const [filterList, setFilterList] = useState(allRestroList);

  useEffect(() => {
    getRestorentData();
  }, []);

  async function getRestorentData() {
    let data = await fetch("http://localhost:3000/users");
    let json = await data.json();
    setAllrestroList(json.data);
    setFilterList(json.data);
  }
  function filterData(search, data) {
    let filteredList = data.filter((list) => list.data.name.includes(search));
    return filteredList;
  }
  return allRestroList.length == 0 ? (
    <Simmer />
  ) : (
    <>
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button
          onClick={() => {
            const data = filterData(search, allRestroList);
            setFilterList(data);
          }}
        >
          search
        </button>
      </div>
      <div className="resturent">
        {filterList.map((resturent) => {
          return (
            <Link to={"/restarant/"+resturent.data.id} key={resturent.data.id}>
              <ResturantCard {...resturent.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
