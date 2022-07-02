import React from "react";
import SubHeading from "../components/SubHeading";
import chart from "../secure investment data/performance.png";

export default function Perfomance() {
  return (
    <div>
      <SubHeading title="Performance" />
      <div className="perf">
        <h2>Trading Performance – Monthly Return 15% – 30%</h2>
        <h3>Verified by Myfxbook</h3>
        <br />
        <img src={chart} alt="" />
      </div>
    </div>
  );
}
