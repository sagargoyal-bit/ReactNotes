import { useRouteError } from "react-router-dom";

const Error =()=>{
    const error=useRouteError();
return (
  <div>
    <h1>Opps</h1>
    <h2>Somthing went wrong</h2>
    <h2>{error.status+ " : " + error.statusText}</h2>
  </div>
);
}
export default Error;