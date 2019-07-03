import React from 'react';
import {useFriendStatus} from "./use-friend-status";

function FriendListItem(props) {
    const isOnline = useFriendStatus(props.id);
    return (
        <li style={{color: isOnline ? 'green' : 'black'}}>{props.id}</li>
    )
}

export default FriendListItem;
