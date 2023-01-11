import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container mx-auto ${props.paddingZero ? 0 : "px-6 lg:px-10"}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
