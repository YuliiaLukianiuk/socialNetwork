import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>


            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"Hello"}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
