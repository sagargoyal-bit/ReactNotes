export const Simmer=()=>{
    return (
      <div className="RestroList">
        {Array(10)
          .fill("")
          .map((e,index) => (
            <div className="Simmer" key={index}></div>
          ))}
      </div>
    );
}