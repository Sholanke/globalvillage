import React from "react";
import "./index.scss";

export default function BaseHero({ className = "" }) {
  return (
    <div className={`base-hero ${className}`}>
      <div className="app-wrapper heading">
        <h1>Technology and business professionals committed to YOU</h1>
        <p>
          We're technology and business professionals enthusiastic about
          providing high-impact solutions while doing what we love and having
          fun
        </p>
      </div>
    </div>
  );
}
