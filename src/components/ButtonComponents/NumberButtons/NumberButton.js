import React from "react";

const NumberButton = (props) => {
  const {num}=props
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{num}</button>
    </>
  );
};

export default NumberButton;