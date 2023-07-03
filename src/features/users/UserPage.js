import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import { selectUserById } from '../users/usersSlice'
import { selectAllPosts } from '../posts/postsSlice'
import { ProfileCard } from './ProfileCard'

export const UserPage = ({ match }) => {
  const { userId } = match.params
  console.log(userId)

  const user = useSelector(state => {
    console.log(state)
    selectUserById(state, userId)})
  console.log(user)
  
  

  const postsForUser = useSelector(state => {
    const allPosts = selectAllPosts(state)
    return allPosts.filter(post => post.user === userId)
  })

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <ProfileCard profile={user}/>

      <ul>{postTitles}</ul>
    </section>
  )
}