import React from "react";
import classes from "./Navbar.module.css";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import {
  TbUserSquareRounded,
  TbCircleKey,
  TbHexagonLetterO,
} from "react-icons/tb";
import { RiQuestionnaireLine } from "react-icons/ri";
import { LiaCoinsSolid } from "react-icons/lia";
import { LuBadgePercent } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import userImg from "../../assets/user.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className={classes.logo}>
        <div className={classes["logo-icon"]}>
          <TbHexagonLetterO size={30} />
        </div>
        <p>Dashboard</p>
      </div>
      <nav className={classes.navlist}>
        <ul>
          <div className={`${classes["nav-links-1"]} ${classes.active} `}>
            <div className={classes["icon-div"]}>
              <TbCircleKey size={22} />
            </div>
            <li>
              Dashboard <i className={`${classes.arrow} ${classes.right}`}></i>
            </li>
          </div>
          <div className={classes["nav-links"]}>
            <div className={classes["icon-div"]}>
              <AiFillCodeSandboxSquare size={22} />
            </div>
            <li>
              Product <i className={`${classes.arrow} ${classes.right}`}></i>
            </li>
          </div>
          <div className={classes["nav-links"]}>
            <div className={classes["icon-div"]}>
              <TbUserSquareRounded size={22} />
            </div>
            <li>
              Customers <i className={`${classes.arrow} ${classes.right}`}></i>
            </li>
          </div>
          <div className={classes["nav-links"]}>
            <div className={classes["icon-div"]}>
              <LiaCoinsSolid size={22} />
            </div>
            <li>
              Income <i className={`${classes.arrow} ${classes.right}`}></i>
            </li>
          </div>
          <div className={classes["nav-links"]}>
            <div className={classes["icon-div"]}>
              <LuBadgePercent size={22} />
            </div>
            <li>
              Promote <i className={`${classes.arrow} ${classes.right}`}></i>
            </li>
          </div>
          <div className={classes["nav-links"]}>
            <div className={classes["icon-div"]}>
              <RiQuestionnaireLine size={22} />
            </div>
            <li>
              Help <i className={`${classes.arrow} ${classes.right}`}></i>
            </li>
          </div>
        </ul>
      </nav>
      <div className={classes["user-profile"]}>
        <div className={classes["user-img"]}>
          <img src={userImg} alt="user-img" />
        </div>
        <div className={classes["user-info"]}>
          <h5>Evana</h5>
          <p>Project Manager</p>
        </div>
        <div className={classes["down-arrow"]}>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
