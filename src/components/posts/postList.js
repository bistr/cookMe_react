import React from 'react'
import PostCard from "./postCard"


class PostList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
        this.fetchPosts = this.fetchPosts.bind(this);
        this.fetchPosts(this.props.recipe)
    }

    fetchPosts(recipeId)
    {
        let fakeURL = 'https://5e7ce6e0a917d700166840b4.mockapi.io/postsByRecipe/'+recipeId
        let realURL = "https://cook-me.herokuapp.com/recipes/"+recipeId+"/posts"
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ posts: data })
        })
        .catch(console.log)
    }
    render()
    {
        if (this.state.posts == null)
        {
            return null;
        }
        const {posts} = this.state;
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
