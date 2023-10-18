import React from "react";
import classes from "./ProductData.module.css";
import abstract from "../../../assets/abstract.jpg";
import planet from "../../../assets/planet.jpg";

const ProductData = () => {
  return (
    <>
      <div className={classes["product-data"]}>
        <div className={classes["product-text"]}>
          <p className={classes.heading}>Product Sell</p>
          <input className={classes.searchbox} placeholder="🔍 Search" />
          <select className={classes.dropdown}>
            <option>Last 30 days</option>
          </select>
        </div>
        <div className={classes["product-table"]}>
          <table style={{ width: "100%" }}>
            <tr>
              <th style={{ width: "68%" }}>Product Name</th>
              <th style={{ width: "15%" }}>Stock</th>
              <th style={{ width: "8%" }}>Price</th>
              <th>Total Sales</th>
            </tr>
            <tr>
              <td className={classes["product-name"]}>
                <img src={abstract} alt="abstract-img" />
                <div className={classes["data-text"]}>
                  <p className={classes.data}>Abstract 3D</p>
                  <p className={classes.subdata}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </td>
              <td style={{ fontSize: "12px" }}>32 in stock</td>
              <td style={{ fontSize: "12px", fontWeight: "bold" }}>$45.99</td>
              <td style={{ fontSize: "12px", paddingLeft: "20px" }}>20</td>
            </tr>
            <tr>
              <td className={classes["product-name"]}>
                <img src={planet} alt="planet-img" />
                <div className={classes["data-text"]}>
                  <p className={classes.data}>Sarphens Illustration</p>
                  <p className={classes.subdata}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </td>
              <td style={{ fontSize: "12px" }}>32 in stock</td>
              <td style={{ fontSize: "12px", fontWeight: "bold" }}>$45.99</td>
              <td style={{ fontSize: "12px", paddingLeft: "20px" }}>20</td>
            </tr>
          </table>
        </div>
      </div>
      <div className={classes["table-data"]}></div>
    </>
  );
};

export default ProductData;
