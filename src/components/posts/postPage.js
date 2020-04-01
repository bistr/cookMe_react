import React from 'react'
import ImageDisplay from "../imageDisplay"
import BackToRecipeButton from "../backToRecipeButton"
import AuthorInfo from "../authorInfo"
import "../../index.css"

class PostPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            post:null,
            author: null,
        }
        console.log(this.props.match.params.id);
        this.fetchPost =this.fetchPost.bind(this)
        this.fetchAuthor = this.fetchAuthor.bind(this)
        this.fetchPost(this.props.match.params.id);
        //this.fetchAuthor(this.state.post.authorId)

        // FIX THIS SHIT


    }

    fetchPost(id)
    {
        let fakeURL = 'https://5e7ce6e0a917d700166840b4.mockapi.io/postsByID/'+id
        let realURL = 'https://cook-me.herokuapp.com/posts/'+id
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ post: data })
        })
        .then(()=>this.fetchAuthor(this.state.post.user_id))
        .catch(console.log)
    }

    fetchAuthor(id)
    {
        let fakeURL = 'https://5e7ce6e0a917d700166840b4.mockapi.io/authors/'
        let realURL = 'https://cook-me.herokuapp.com/users/'+id
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ author: data })
        })
        .catch(console.log)
    }

    render()
    {
        if (this.state.post == null || this.state.author == null)
        {
            return null;
        }
        const {post, author} = this.state;
        console.log(post)
        console.log(author)
        return (

            <div className = "container-fluid">
                <div className="row mx-5">
                    <ImageDisplay src={post.photo} className="col-lg-9"/>
                    <AuthorInfo author={author} className="col-lg-3"/>
                </div>
                <div className="row mx-5 my-3 d-flex">
                    <blockquote class="blockquote mx-3">
                    <p className="mb-0 display-4">{post.title}</p>
                      <footer class="blockquote-footer">{author.real_name}</footer>
                    </blockquote>
                </div>
                <div className="row d-flex mx-3">
                    <article className="mx-5">{post.content}</article>
                </div>
                <div className="row d-flex mx-5 my-5">
                    <BackToRecipeButton text="Original recipe" id={post.recipe_id} />
                </div>

            </div>
        )
    }
};

export default PostPage;
