import React from "react";

const Display = (props) => {
  const {displayVal} = props
  return <div>
    <p>{displayVal}</p>
  </div>;
};

export default Display;