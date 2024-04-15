import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
type Props = {
  buttonNames: string;
  fieldId: number;
  onClick: () => void;
};

const InputComp = ({ buttonNames, fieldId, onClick }: Props) => {
  useEffect(() => {
    console.log("RENDER AGAIN");
  }, []);
  return (
    <>
      <label className="">
        <span>Full Name</span>
        <input
          className="w3-input relative"
          style={{ width: "100%" }}
          placeholder="Enter your name here"
        ></input>
        <button
          onClick={() => {
            onClick();
          }}
        >
          {buttonNames}
        </button>
      </label>
    </>
  );
};

export { InputComp };
