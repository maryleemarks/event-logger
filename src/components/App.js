import React from "react";
import Header from "./Header";
import EventControl from "./EventControl";

function App(){
  const name = "Susan";
  const name2 = "Huxley";
  return (
    <React.Fragment>
      <Header />
      <EventControl />
    </React.Fragment>
  );
}

export default App;
