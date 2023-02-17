import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    console.log("setVisible->", setIsVisible);
    console.log("isVisible->", isVisible);
  return (
    <div className="border border-black bg-pink-50 p-2 m-2">
      <h3 className="font-bold text-2px m-1">{title}</h3>

      <button
        onClick={() => {
          setIsVisible ?setIsVisible(true) : setIsVisible(false);
        }}
        className="cursor-pointer underline"
      >
        {isVisible?"Hide":"Show"}
      </button>
      
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [isVisibleSection, setVisibleSection] = useState("about");
  console.log(isVisibleSection);
  return (
    <div className="1px border-solid">
      <p className="text-3xl p-2 m-2 font-semibold">Instamart</p>
      <Section
        title={"About Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={isVisibleSection == "about"}
        setIsVisible={() => {
          isVisibleSection=='about'?setVisibleSection(""):setVisibleSection("about");
        }}
      />
      <Section
        title={"Carrer"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={isVisibleSection == "carrer"}
        setIsVisible={() => {
          isVisibleSection == "carrer"
            ? setVisibleSection("")
            : setVisibleSection("carrer");
        }}
      />
    </div>
  );
};
export default Instamart;
