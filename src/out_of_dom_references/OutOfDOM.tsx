import React, {useEffect, useRef, useState} from "react";

const OutOfDOM = (): JSX.Element => {
  const gcRef = useRef(null);
  const [showRef, setRefDisplay] = useState(true);
  let elements = {};
  useEffect(() => {
    elements = {
      3: gcRef.current
    };
    setInterval(() => {
      console.log(elements);
      setRefDisplay(!showRef);
    }, 5000);
  }, []);

  return (
    <>
      <h3>Out of DOM references</h3>
      <ul>
        <li>DOM element is not present but still the GC doesnt clear memory</li>
        {showRef && <li ref={gcRef}>3. Out of DOM element is not garbage collected</li>}
      </ul>
    </>
  );
}

export default OutOfDOM;
