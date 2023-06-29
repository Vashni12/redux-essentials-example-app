import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { PostAuthor } from "./PostAuthor";
import { ReactionButtons } from "./ReactionButtons";
import { selectPostById } from "./postsSlice";

export const SinglePostPage = ({ match }) => {
    const {postId} = match.params;

    const  post = useSelector(state => selectPostById(state,postId))

    if(!post){
        return(
            <section>
                <h2>Post Not Found!</h2>
            </section>
        )
    }


    return(
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <PostAuthor userId={post.user} />
                <br></br>
                <ReactionButtons post={post}></ReactionButtons>
                <br></br>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}