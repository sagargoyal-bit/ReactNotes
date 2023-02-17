import { imgID } from "../constent";

const Fooditems = ({ name, cloudinaryImageId }) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={`${imgID}${cloudinaryImageId}`}
      />
      <h2 className="font-bold text-xl">{name}</h2>
    </div>
  );
};

export default Fooditems;
