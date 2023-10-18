import React from "react";
import UserData from "./UserData/UserData";
import classes from "./Dashboard.module.css";
import Overview from "./Overview/Overview";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import ProductData from "./ProductData/ProductData";

const Dashboard = () => {
  return (
    <div className="home">
      <UserData />
      <div className={classes.data}>
        <Overview />
        <CustomerInfo />
      </div>
      <ProductData />
    </div>
  );
};

export default Dashboard;
