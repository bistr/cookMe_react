import React from 'react'
import UserProfile from './userProfile';
import GenericForm from "../generic/genericForm"
import SingleInput from "../generic/singleInput"
import Utilities from "../generic/utilities"
import Alert from "../generic/alert"

class LoginForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            "errors":[]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(formInfo)
    {
        this.setState({"errors":[]});
        Utilities.sendRequestPost('https://cook-me.herokuapp.com/login',formInfo)
        .then((data)=>
        {
            if (data["status"]==="OK")
            {
                UserProfile.setName(data["id"]);
                window.open("/profile/"+UserProfile.getName());
            }
            else if(data["status"]==="Wrong password")
            {
                this.setState({"errors": this.state.errors.concat("Wrong password.")});
            }
            else if(data["status"]==="User doesn't exist"){
                this.setState({"errors": this.state.errors.concat("Username doesn't exist.")});
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
            <GenericForm handler={this.handleSubmit} required={["username", "password"]} >
                <SingleInput name= "username" placeholder="Username"  />
                <SingleInput name= "password" type ="password" placeholder="Password"  />
            </GenericForm>
            <Alert errors={this.state.errors} />
            </>

        )
    }
 }

export default LoginForm;
