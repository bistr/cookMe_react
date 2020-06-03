import React from 'react'
import UserProfile from './userProfile';

class LoginForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            success: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        event.preventDefault()
        fetch('https://cook-me.herokuapp.com/login', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"username":username, "password":password}),
        })
        .then((response) => response.json())
        .then((data)=>
    {
        if (data["status"]==="OK")
        {
            UserProfile.setName(data["id"]);
            //redirect to profile
            window.open("/profile/"+UserProfile.getName());
        }
        else if(data["status"]==="Wrong password")
        {
            alert("wrong password")
        }
        else if(data["status"]==="User doesn't exist"){
            alert("No such user")
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




        //UserProfile.setName(userId);
    }


    render()
    {
        return(
            <form onSubmit={this.handleSubmit} className="w-75">

                <label htmlFor="username">Which user are you?</label>
                <input id="username" className="form-input my-3" type="text" required placeholder="Username"  />
                <label htmlFor="password">Password</label>
                <input id="password" className="form-input my-3" type="password" required placeholder="Password"  />
                <button className="btn btn-primary my-3" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </form>
        )
    }
 }

export default LoginForm;
