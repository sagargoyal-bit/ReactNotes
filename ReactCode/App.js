import React from "react";
import ReactDOM  from "react-dom/client";

const Heading=()=>(
  <h1>this is namaste react course</h1>
)

//Component composition
const ComponentCompositon=()=>{
  return(
    <div>
      <Heading/>
    </div>
  )}

  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentCompositon/>);
