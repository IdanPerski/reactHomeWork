import { useState } from "react";

export default function UseAlert() {
  const [showAlert, setShowAlert] = useState(false);
  const handelAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
}

//JSX
/* 
import React from "react";
import useAlert from "./useAlert";

export default function ShowAlert() {
  const [showAlert, handleAlert] = useAlert();
  return (
    <div>
      {showAlert && <h1>This is the alert!!!!</h1>}
      <button onClick={handleAlert}>Show Alert</button>
    </div>
  );
}

*/

//js
/* 
mport { useState } from "react";

export default function useAlert() {
  const [showAlert, setShowAlert] = useState(false);
  function handleAlert() {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  }

*/
