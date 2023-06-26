import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/PostList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { Profiles } from './features/users/Profiles'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <PostsList/>
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage}/>
          <Route exact path="/createPost" component = {AddPostForm}/>
          <Route exact path="/Profiles" component={Profiles}/>
          <Route exact path="/editPost/:postId" component={EditPostForm}/>
          
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
