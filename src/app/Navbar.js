import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchNotifications } from '../features/notification/notificationsSlice'

export const Navbar = () => {
  const dispatch = useDispatch()

  const fetchNewNotifications = () => {dispatch(fetchNotifications())}
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to = "/">Posts</Link>
            <Link to="/CreatePost">Create Post</Link>
            <Link to="/Profiles">Profiles</Link>
            <Link to="/notifications">Notifications</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
