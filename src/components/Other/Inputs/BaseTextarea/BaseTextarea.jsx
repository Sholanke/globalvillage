import React from "react";

export default function BaseTextarea({ labelText = "Label here" }) {
  return (
    <label className="base-input">
      <p className="label-text">{labelText}</p>
      <textarea type="text" placeholder="Type here" className="input" />
    </label>
  );
}
