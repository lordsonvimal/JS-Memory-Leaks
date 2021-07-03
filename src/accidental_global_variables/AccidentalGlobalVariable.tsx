import React, {useEffect, useState} from "react";

function getWindow(): any {
  return window;
}

function globalVariable(): string {
  const stringValue = "1. Accidental Global Variables is not garbage collected";
  getWindow().windowData = stringValue;
  return stringValue;
}

const AccidentalGlobalVariable = (): JSX.Element => {
  const [showGlobal, setGlobal] = useState(true);
  useEffect(() => {
    setInterval(() => {
      console.log(getWindow().windowData);
    }, 5000);
    setTimeout(() => {
      setGlobal(!showGlobal);
    }, 5000);
  });
  return (
    <>
      <h3>Accidental Global Variables</h3>
      <ul>
        <li>Occurs when window object stores a variable and never set to null/undefined</li>
        <li>Gets prevented by using {`"use strict"`}</li>
        {showGlobal && <li>{globalVariable()}</li>}
      </ul>
    </>
  );
}

export default AccidentalGlobalVariable;
