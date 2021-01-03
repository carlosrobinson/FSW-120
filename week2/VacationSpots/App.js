import React from "react";
import Vacation from "./components/Vacation";
import vacationSpots from "./components/vacationSpots";

function App() {
  const vacationComponent = vacationSpots.map((vacation) => (
    <Vacation
      place={vacation.place}
      price={vacation.price}
      timeToGo={vacation.timeToGo}
    />
  ));
  return <div>{vacationComponent}</div>;
}

export default App;
