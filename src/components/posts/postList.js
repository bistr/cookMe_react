import React from 'react'
import PostCard from "./postCard"


class PostList extends React.Component
{
    render()
    {
        if (this.props.posts == null)
        {
            return null;
        }
        const {posts} = this.props;
        return (
          <div className="card-deck">
            {posts.map((post) => (
                <PostCard post={post}/>
            ))}
          </div>
        )
    }
}

export default PostList;
