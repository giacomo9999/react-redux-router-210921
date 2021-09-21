import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadData } from "./actions";

import { NavBar } from "./components/NavBar";
import { Guess } from "./components/Guess";
import { States } from "./components/StatesList";
import { State } from "./components/State";
import { HomePage } from "./components/Home";

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    const res = await fetch("states.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonRes = await res.json();
    dispatch(loadData({ uSStateData: jsonRes.statesInfo.states }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/guess" component={Guess} />
        <Route exact path="/states" component={States} />
        <Route path="/state/:id" component={State} />
      </div>
    </BrowserRouter>
  );
}

export default App;
