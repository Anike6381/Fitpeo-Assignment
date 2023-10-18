import React from "react";
import classes from "./CustomerInfo.module.css";

const CustomerInfo = () => {
  return (
    <div className={classes["customer-info"]}>
      <div className={classes["customer-text"]}>
        <p className={classes.heading}>Customers</p>
        <p className={classes["sub-heading"]}>Customers that buy products</p>
      </div>
      <div className={classes.pie}>
        <div className={classes.outer}>
          <h3>65%</h3>
          <p className={classes["sub-heading-2"]}>TotaL New Customers</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
