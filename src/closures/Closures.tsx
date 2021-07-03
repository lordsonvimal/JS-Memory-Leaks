import React from "react";

let randomObject: any = null;
const setRandomObject = function () {
  const originalThing = randomObject;
  const unusedFunction = function() {
    if (originalThing)
      console.log("This will not be called");
  };
  randomObject = {
    longStr: new Array(1000000).join('*'),
    randomObjectLogger: function () {
      console.log({4: randomObject});
    }
  };
  console.log({4: randomObject});
};

const Closures = (): JSX.Element => {
  setInterval(setRandomObject, 5000);
  return (
    <>
      <h3>Closures</h3>
      <ul>
        <li>Closures with reassigning parent data may impact memory</li>
      </ul>
    </>
  );
}

export default Closures;
