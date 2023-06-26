import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to = "/">Posts</Link>
            <Link to="/CreatePost">Create Post</Link>
            <Link to="/Profiles">Profiles</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
