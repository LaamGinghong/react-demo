import React from 'react';
import FriendStatus from "./friend-status";
import FriendListItem from "./friend-list-item";

function CommonHook() {
    const userIds = [1, 2, 3, 4, 5];
    const friendList = userIds.map(item => (
        <FriendListItem id={item} key={item}/>
    ));
    return (
        <div>
            <FriendStatus/>
            <ul>
                {friendList}
            </ul>
        </div>
    )
}

export default CommonHook;
