import React from 'react'
import UserProfile from "./userProfile"
import GenericForm from "../generic/genericForm"
import SingleInput from "../generic/singleInput"
import Utilities from "../generic/utilities"
import Alert from "../generic/alert"

class RegisterForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={"errors":[]};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleComponentChange(nameOfField, valueOfField)
    {
        this.setState({ [nameOfField]:valueOfField},()=>console.log(this.state));
    }


    handleSubmit(formInfo)
    {
        this.setState({"errors":[]});
        Utilities.sendRequestPost('https://cook-me.herokuapp.com/register',formInfo)
        .then((data)=>
        {
        if (data["status"]==="OK")
        {
            UserProfile.setName(data["id"]);
            window.open("/profile/"+UserProfile.getName());
        }
        else if(data["status"]==="Username taken"){
            this.setState({"errors": this.state.errors.concat("Username is already taken.")});
        }
        else {
            this.setState({"errors": this.state.errors.concat("There was something wrong with your request. Try again later.")});
        }
    })
        .catch((error) => {
          this.setState({"errors": this.state.errors.concat("There was something wrong with your request. Try again later.")});
        });
    }

    render()
    {
        return(
            <>
            <GenericForm handler={this.handleSubmit} required={["username", "password", "real_name", "bio", "photo"]}>
                <SingleInput name="username"/>
                <SingleInput name="password" type="password"/>
                <SingleInput name="real_name" placeholder="Real name"/>
                <SingleInput name="bio" />
                <SingleInput name="photo"/>
            </GenericForm>
            <Alert errors={this.state.errors} />
            </>

        )
    }
 }

export default RegisterForm;
