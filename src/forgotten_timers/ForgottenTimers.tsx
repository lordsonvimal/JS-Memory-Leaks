import React, {useEffect, useState} from "react";

function GetTimer(): JSX.Element {
  const leakResource = "2. Forgotten timer is not Garbage collected";
  setInterval(function() {
    console.log(leakResource);
  }, 5000);
  return <li>{leakResource}</li>
}

const ForgottenTimers = (): JSX.Element => {
  const [showTimer, setTimer] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTimer(!showTimer);
    }, 5000);
  });
  return (
    <>
      <h3>Forgotten timers or callbacks</h3>
      <ul>
        <li>Occurs when timer uses variable from parent scope and never stops</li>
        {showTimer && GetTimer()}
      </ul>
    </>
  );
}

export default ForgottenTimers;
