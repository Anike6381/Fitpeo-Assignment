import React from "react";
import classes from "./UserData.module.css";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineDollar,
} from "react-icons/ai";
import { TbNotes } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import { SlHandbag } from "react-icons/sl";

const UserData = () => {
  return (
    <div className={classes["user-data"]}>
      <div className={classes["user-text"]}>
        <h3>Hello Shahrukh 👋🏼,</h3>
        <input className={classes.searchbox} placeholder="🔍 Search" />
      </div>
      <div className={classes["user-details"]}>
        <div className={classes["user-details-containers"]}>
          <div className={classes["earning-icon-rounded"]}>
            <div className={classes["earning-icon"]}>
              <AiOutlineDollar size={50} />
            </div>
          </div>
          <div className={classes.text}>
            <p className={classes.heading}>Earning</p>
            <p className={classes.number}>$198k</p>
            <p className={classes.info}>
              <span className={classes["profit-span"]}>
                <AiOutlineArrowUp size={12} />
                37.8%
              </span>
              this month
            </p>
          </div>
        </div>
        <div className={classes["user-details-containers"]}>
          <div className={classes["orders-icon-rounded"]}>
            <div className={classes["orders-icon"]}>
              <TbNotes size={50} />
            </div>
          </div>
          <div className={classes.text}>
            <p className={classes.heading}>Orders</p>
            <p className={classes.number}>$2.4k</p>
            <p className={classes.info}>
              <span className={classes["loss-span"]}>
                <AiOutlineArrowDown size={12} />
                2%
              </span>
              this month
            </p>
          </div>
        </div>
        <div className={classes["user-details-containers"]}>
          <div className={classes["income-icon-rounded"]}>
            <div className={classes["income-icon"]}>
              <LiaCoinsSolid size={50} />
            </div>
          </div>
          <div className={classes.text}>
            <p className={classes.heading}>Income</p>
            <p className={classes.number}>$2.4k</p>
            <p className={classes.info}>
              <span className={classes["loss-span"]}>
                <AiOutlineArrowDown size={12} />
                2%
              </span>
              this month
            </p>
          </div>
        </div>
        <div className={classes["user-details-containers"]}>
          <div className={classes["sales-icon-rounded"]}>
            <div className={classes["sales-icon"]}>
              <SlHandbag size={40} />
            </div>
          </div>
          <div className={classes.text}>
            <p className={classes.heading}>Total Sales</p>
            <p className={classes.number}>$89k</p>
            <p className={classes.info}>
              <span className={classes["profit-span"]}>
                <AiOutlineArrowUp size={12} />
                11%
              </span>
              this month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
