import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const State = () => {
  const uSStateData = useSelector((state) => state.uSStateData);
  const { id } = useParams();
  const stateDataObj = uSStateData[id]["@attributes"];
  return (
    <div className="container-inner">
      <h1>{stateDataObj.name}</h1>
      <br />
      <p>Abbrev: {stateDataObj.abbreviation}</p>
      <p>Capital: {stateDataObj.capital}</p>
      <p>Most Populous City: {stateDataObj["most-populous-city"]}</p>
      <p>Population: {stateDataObj.population}</p>
      <p>Square Miles: {stateDataObj["square-miles"]}</p>
      <p>Time Zone 1: {stateDataObj["time-zone-1"]}</p>
      <p>Time Zone 2: {stateDataObj["time-zone-2"]}</p>
      <p>DST: {stateDataObj.dst}</p>
      <br />
      <div className="img-parent">
        <img
          src={`https://www.50states.com/images/redesign/flags/${stateDataObj.abbreviation.toLowerCase()}-largeflag.png`}
          alt="State Flag"
        />
      </div>
      <br />
      <Link to={`/states`}>
        <button className="us-state">Back To List Of States</button>
      </Link>
    </div>
  );
};
