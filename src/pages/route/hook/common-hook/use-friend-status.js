import React from 'react';

export function useFriendStatus(friendId) {
    const [isOnline, setIsOnline] = React.useState(null);

    function handleStatusChange() {
        const status = friendId % 2 === 0;
        setIsOnline(status);
    }

    React.useEffect(() => {
        handleStatusChange();
    });

    return isOnline;
}
