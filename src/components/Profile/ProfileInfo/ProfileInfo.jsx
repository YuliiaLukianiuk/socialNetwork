import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://inbusiness.kz/ru/images/original/16/images/utkz01ks.jpg"></img>
            </div>

            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
