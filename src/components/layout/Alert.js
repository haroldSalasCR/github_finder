import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && ( //`alert alert-${alert.type}`
      <div className={"alert alert-danger"}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
