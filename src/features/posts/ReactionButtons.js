import React from 'react'
import { useDispatch } from 'react-redux'

import { reactionAdded } from './postsSlice'


const reactionEmoji = {
  thumbsUp: <span role="img" aria-label="thumbsUp">👍</span>,
  hooray: <span role="img" aria-label="hooray">🎉</span>,
  heart: <span role="img" aria-label="heart">❤️</span>,
  rocket: <span role="img" aria-label="rocket">🚀</span>,
  eyes: <span role="img" aria-label="eyes">👀</span>
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();


    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
      return (
        <button 
            key={name} 
            type="button" 
            className="muted-button reaction-button"
            onClick={()=> dispatch(reactionAdded({postId: post.id,reaction:name}))}>
          {emoji} {post.reactions[name]}
        </button>
      )
    })
  
    return <div>{reactionButtons}</div>
  }