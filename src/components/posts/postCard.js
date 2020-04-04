import React from 'react'
import "../../componentsStyle/cardStyle.css"
class PostCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(postId, e)
    {
        e.preventDefault();
        const win = window.open("/posts/"+postId, '_blank');
        if (win != null) {
            win.focus();
        }
    }

    render()
    {
        const {post} = this.props;
        return(
        <div class="card post-card" tag="a" onClick={(e)=>this.handleClick(post.id, e)}>
          <img class="card-img post-card-img" src={post.photo} alt={post.title}/>
          <div class="card-img-overlay d-flex justify-content-center align-items-center">
            <h2 className="card-text text-white">{post.title}</h2>
          </div>
        </div>
        )
    }
}

export default PostCard
