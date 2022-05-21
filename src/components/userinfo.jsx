import React from "react";

const UserInfo = ({username,description}) => {
    return (
        <div>
            <p><b>{username}</b></p>
            <p>{description}</p>
        </div>
    );
}

export default UserInfo;
  