import ResturantCard from "./ResturantCard";
// import { ResturantList } from "../constent";
import { useEffect, useState } from "react";
import { Simmer } from "./Simmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

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
 
  const online = useOnline()
  if(!online){
    return <h1>You are not online</h1>
  }
  if (!allRestroList) return null;

    return allRestroList?.length == 0 ? (
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
              <Link
                to={"/restarant/" + resturent.data.id}
                key={resturent.data.id}
              >
                <ResturantCard {...resturent.data} />
              </Link>
            );
          })}
        </div>
      </>
    );
};
export default Body;
