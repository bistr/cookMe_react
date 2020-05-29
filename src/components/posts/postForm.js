import React from 'react'
import SingleInput from "../genericInputs/singleInput"
import UserProfile from "../userProfile"
import "../../index.css"


class PostForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {recipe_id:this.props.id, user_id:UserProfile.getName()}
        this.handleChange = this.handleChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openPostPage = this.openPostPage.bind(this);
    }

    handleComponentChange(nameOfField, valueOfField)
    {
        this.setState({ [nameOfField]:valueOfField},()=>console.log(this.state));
    }

    handleChange(event)
    {
        event.preventDefault();
        console.log(this.state)
    }

    openPostPage(id)
    {
        const win = window.open("/posts/"+id);
        if (win != null) {
            win.focus();
        }
    }

    handleSubmit(e)
    {
        console.log(this.state)
        e.preventDefault();
        fetch('https://cook-me.herokuapp.com/publish_post', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        })
        .then((response) => response.json())
        .then((data) => {
          this.openPostPage(data.id)
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        //maybe open post?
    }

    render()
    {
        return(
            <>
                <p class="h4 mb-4">Show us how you did!</p>
                <SingleInput name="title" handler={this.handleComponentChange}/>
                <textarea class="form-control mb-2" name="content" rows="3" placeholder="Tell us in detail about your experience cooking." onChange={(e)=>this.handleComponentChange(e.target.name, e.target.value)} ></textarea>
                <SingleInput name="photo" handler={this.handleComponentChange}/>
            <hr />
            <button class="btn btn-info btn-block" onClick={this.handleSubmit}>Publish post</button>
            </>

    )
    }
 }

export default PostForm;
