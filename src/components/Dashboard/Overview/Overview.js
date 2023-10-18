import React from "react";
import classes from "./Overview.module.css";

const Overview = () => {
  return (
    <div className={classes.overview}>
      <div className={classes["overview-heading"]}>
        <div className={classes["overview-text"]}>
          <p className={classes.heading}>Overview</p>
          <p className={classes["sub-heading"]}>Monthly Earning</p>
        </div>
        <select className={classes.dropdown}>
          <option>Quarterly</option>
        </select>
      </div>
      <div className={classes.barcontainer}>
        <div className={classes.bar}>
          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "60%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Jan</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "40%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Feb</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "100%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Mar</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "70%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Apr</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "80%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>May</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "30%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Jun</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "80%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Jul</div>
          </div>

          <div className={classes.month}>
            <div
              className={classes.graph}
              style={{ height: "100%", background: "blue", opacity: 0.7 }}
            >
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Aug</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "90%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Sep</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "70%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Oct</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "65%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Nov</div>
          </div>

          <div className={classes.month}>
            <div className={classes.graph} style={{ height: "70%" }}>
              <div className={classes.percent}></div>
            </div>
            <div className={classes["bar-label"]}>Dec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
