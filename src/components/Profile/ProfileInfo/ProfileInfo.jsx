import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
      <div>
        <img src="https://inbusiness.kz/ru/images/original/16/images/utkz01ks.jpg"></img>
      </div>
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
