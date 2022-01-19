import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile,isOwner, status, updateStatus, savePhoto}) => {

    return (
        <div>
            <ProfileInfo savePhoto={savePhoto}
                         profile={profile}
                         isOwner={isOwner}
                         status={status}
                         updateStatus={updateStatus}
                         />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
