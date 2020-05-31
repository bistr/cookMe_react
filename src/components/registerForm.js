import React from 'react'
import SingleInput from "./genericInputs/singleInput"
import UserProfile from "./userProfile"

class RegisterForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            "username":"",
            "password":"",
            "real_name":"",
            "bio":"",
            "photo":""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
    }

    handleComponentChange(nameOfField, valueOfField)
    {
        this.setState({ [nameOfField]:valueOfField},()=>console.log(this.state));
    }


    handleSubmit(e)
    {
        e.preventDefault();
        if(this.state.username === "" || this.state.password==="")
        {
            return;
        }
        // let fields = ["username", "password", "real_name", "bio", "photo"];
        // fields.forEach((field) => {
        //     let value = document.getElementById(field).value;
        //     this.setState({ [field]:value});
        // });

        // let username = document.getElementById("username").value;
        // let password = document.getElementById("password").value;
        // let real_name = document.getElementById("real_name");
        // let bio = document.getElementById("bio");
        // let photo = document.getElementByIdById("photo");
        console.log(this.state);
        fetch('https://cook-me.herokuapp.com/register', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state),
        })
        .then((response) => response.json())
        .then((data)=>
        {
        if (data["status"]==="OK")
        {
            UserProfile.setName(data["id"]);
            //redirect to profile
            const win = window.open("/profile/"+UserProfile.getName());
        }
        else if(data["status"]==="Username taken"){
            alert("Username taken")
        }
        else {
            alert("what happened?????")
        }
    })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} className="w-75">

                <SingleInput name="username" required="true" handler={this.handleComponentChange}/>
                <SingleInput name="password" required="true" type="password" handler={this.handleComponentChange}/>
                <SingleInput name="real_name" handler={this.handleComponentChange}/>
                <SingleInput name="bio" handler={this.handleComponentChange} />
                <SingleInput name="photo" handler={this.handleComponentChange} />


                <input type="submit" onClick={(e)=>this.handleSubmit(e)}/>
        </form>
        )
    }
 }

export default RegisterForm;
