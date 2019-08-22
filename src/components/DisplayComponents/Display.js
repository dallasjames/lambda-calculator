import React from "react";


const Display = props => {
  const {displayVal} = props
  return (
  <>
    <div className="display">
      <p className="display">{displayVal}</p>
    </div>
  </>
  );
};

export default Display;