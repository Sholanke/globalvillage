import React from "react";
import "./index.scss";

export default function BaseInput({ labelText = "Label here" }) {
  return (
    <label className="base-input">
      <p className="label-text">{labelText}</p>
      <input type="text" placeholder="Type here" className="input" />
    </label>
  );
}
