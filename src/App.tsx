import React from "react";
import AccidentalGlobalVariable from "./accidental_global_variables/AccidentalGlobalVariable";
import ForgottenTimers from "./forgotten_timers/ForgottenTimers";
import OutOfDOM from "./out_of_dom_references/OutOfDOM";
import Closures from "./closures/Closures";

const App = (): JSX.Element => {
  return (
    <>
      <AccidentalGlobalVariable />
      <ForgottenTimers/>
      <OutOfDOM />
      <Closures />
    </>
  );
}

export default App;
