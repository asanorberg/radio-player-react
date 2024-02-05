import React from "react";
import "./SkeletonStyle.css";
import Shimmer from "./Shimmer";

const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton left">
        <div className="skeleton thumbnail"></div>
      </div>
      <div className="skeleton right">
        <div className="skeleton title"> </div>
        <div className="skeleton audio"></div>
      </div>
      <Shimmer />
    </div>
  );
};

export default Skeleton;
