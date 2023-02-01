export const Simmer=()=>{
    return (
      <div className="RestroList">
        {Array(10)
          .fill("")
          .map((e) => (
            <div className="Simmer"></div>
          ))}
      </div>
    );
}