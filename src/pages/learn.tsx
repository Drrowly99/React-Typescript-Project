import React, { useState, useEffect } from "react";
import "../../public/css/w3.css";
import { InputComp } from "../components/inputComp";

const Learn = () => {
  let arr = ["click me", "name me", "call me"];
  const [count, setCount] = useState(0);
  // const [buttonName, setbuttonName] = useState(arr);

  useEffect(() => {
    console.log("RENDER EFFECT");
  }, [count]);
  //
  // const setbuttonName_ = () => {
  //   return setbuttonName([arr[count], "m", "n"]);
  // };
  const setCount_ = () => {
    console.log(count);
    setCount((prevCount) => {
      return prevCount === 2 ? 0 : prevCount + 1;
    });
  };

  return (
    <div
      className="w3-white w3-border w3-border-lightgrey w3-round"
      style={{ height: "auto", width: "500px", position: "relative" }}
    >
      <div className="w3-padding relative w3-grid" style={{ width: "500px" }}>
        <InputComp
          buttonNames={arr[count]}
          fieldId={count}
          onClick={() => {
            setCount_();
          }}
        />
      </div>
    </div>
  );
};

export default Learn;
