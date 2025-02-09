import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div
      style={{ height: 300 }}
      className="d-flex justify-content-center align-items-center"
    >
      <FaSpinner fontSize={40} className="fa-spin" />
    </div>
  );
};

export default Spinner;
