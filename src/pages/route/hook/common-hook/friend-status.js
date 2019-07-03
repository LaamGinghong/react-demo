import {useFriendStatus} from "./use-friend-status";
import React from 'react';

function FriendStatus() {
    const id = Math.round(Math.random() * 10);
    const isOnline = useFriendStatus(id);
    if (isOnline === 'null') {
        return (
            <div>
                <h3>{id}</h3>
                <p>加载中...</p>
            </div>
        )
    }
    return (
        <div>
            <h3>{id}</h3>
            <p>{isOnline ? '在线' : '离线'}</p>
        </div>
    )
}

export default FriendStatus;
