import React from "react";

const InputElement = ({ style, type, placeholder, onChange, name }) => {
  return (
    <input
      className={style}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  );
};

export default InputElement;
