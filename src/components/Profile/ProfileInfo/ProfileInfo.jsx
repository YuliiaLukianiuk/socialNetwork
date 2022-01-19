import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import usersPhoto from "../../../img/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0])
      }
    }
    return (
        <div>


            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || usersPhoto} className={classes.mainPhoto}/>
              {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
              <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
