import React from 'react'
import { useSelector } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'

import { selectAllUsers } from '../users/usersSlice'

import { selectAllNotifications } from './notificationsSlice'


export const NotificationsList = () => {
    const notifications = useSelector(selectAllNotifications);
    const users = useSelector(selectAllUsers);


    const renderedNotifications = notifications.map(
        notification=>{
            const date = parseISO(notification.date);
            const timeAgo = formatDistanceToNow(date)
            const user = users.find(user => user.id === notification.id) || {name : 'Unkown User'}
            return(
                <div key = {notification.id} className="notification">
                    <div>
                        <b>{user.name}</b>{notification.message}
                    </div>
                    <div>
                        <i>{timeAgo} ago</i>
                    </div>
                </div>
            )
        }

    )

    return(
        <section className="notificationsList">
            <h2>Notifications</h2>
            {renderedNotifications}
        </section>
    )
}