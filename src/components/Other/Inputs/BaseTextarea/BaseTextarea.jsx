import React from "react";

export default function BaseTextarea({
  labelText = "Label here",
  placeholder = "Type here"
}) {
  return (
    <label className="base-input">
      <p className="label-text">{labelText}</p>
      <textarea type="text" placeholder={placeholder} className="input" />
    </label>
  );
}
