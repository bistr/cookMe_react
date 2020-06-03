import React from 'react'
import SingleInput from "../generic/singleInput"
import UserProfile from "../authentication/userProfile"
import GenericForm from "../generic/genericForm"
import Utilities from "../generic/utilities"
import "../../index.css"


class PostForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {recipe_id:this.props.id, user_id:UserProfile.getName()}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data)
    {
        data.recipe_id = this.state.recipe_id;
        Utilities.sendRequestPost("https://cook-me.herokuapp.com/publish_post", data)
        .then((data) => {
          window.open("/posts/"+data.id);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    render()
    {
        return(
            <>
                <p class="h4 mb-4">Show us how you did!</p>
                <GenericForm required={["title", "content", "photo"]} handler={this.handleSubmit}>
                    <SingleInput name="title"/>
                    <SingleInput name="content" textarea="true"/>
                    <SingleInput name="photo"/>
                </GenericForm>
            </>

    )
    }
 }

export default PostForm;
