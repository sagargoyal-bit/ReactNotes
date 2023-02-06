import { useState, useEffect } from "react";

const useResturant = (id) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    menuApiCall();
  }, []);

  async function menuApiCall() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=26.778832&lng=75.875169&menuId=${id}`
    );
    const jsonData = await data.json();
    setMenu(jsonData.data);
  }

  return menu;
};
export default useResturant;
