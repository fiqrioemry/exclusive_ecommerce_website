import React from "react";
import SpinnerLoading from "../features/loading/SpinnerLoading";

const ButtonElement = ({ style, action, title, loading, value = "" }) => {
  return (
    <button className={style} onClick={action} disabled={loading} value={value}>
      {loading ? <SpinnerLoading /> : `${title}`}
    </button>
  );
};

export default ButtonElement;
