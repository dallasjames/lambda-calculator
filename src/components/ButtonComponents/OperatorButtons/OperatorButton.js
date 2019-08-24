import React from "react";

const OperatorButton = (props) => {
  const {opera} = props
  return (
    <div className="opDiv">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button className="opBtn">{opera}</button>
    </div>
  );
};

export default OperatorButton;