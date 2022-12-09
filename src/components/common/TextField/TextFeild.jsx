import React from "react";
import "./TextField.scss";

const TextFeild = ({ placeholder, type, register, err }) => {
  return (
    <div>
      <input
        className="text-field"
        type={type}
        {...register}
        placeholder={placeholder}
      />
      <span className="error-massage">{err}</span>
    </div>
  );
};

export default TextFeild;
