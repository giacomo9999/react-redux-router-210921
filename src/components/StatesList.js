import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const States = () => {
  const uSStateData = useSelector((state) => state.uSStateData);
  const statesList = uSStateData.map((state, index) => {
    return (
      <Link key={index} to={`/state/${index}`}>
        <button className="us-state" key={index}>
          {state["@attributes"].name}
        </button>
      </Link>
    );
  });
  return (
    <div>
      <h1>LIST OF STATES</h1>
      <h2>Click a state to learn more about it.</h2>
      <div>{statesList}</div>
    </div>
  );
};
