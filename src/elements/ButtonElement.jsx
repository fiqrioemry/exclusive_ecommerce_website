import React from "react";
import Spinner from "../features/Spinner";

const ButtonElement = ({ style, action, title, loading }) => {
  return (
    <button className={style} onClick={action} disabled={loading}>
      {loading ? <Spinner /> : `${title}`}
    </button>
  );
};

export default ButtonElement;
