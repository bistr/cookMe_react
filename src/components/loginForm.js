import React from 'react'
import UserProfile from './userProfile';
import { sha256 } from 'js-sha256';

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
        let userId = document.getElementById("userid").value;
        UserProfile.setName(userId);
    }



    // handleSubmit(e)
    // {
    //     e.preventDefault()
    //     fetch('https://cook-me.herokuapp.com/login', {
    //       method: 'POST',// or 'PUT'
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({"username":this.state.username, "password":sha256(this.state.password)}),
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // }
    // <div className="form-group">
    //     <label>Username</label>
    //     <input type="text" className="form-control" placeholder="Username" name="username" required onChange={this.handleChange} />
    // </div>
    // <div className="form-group">
    //     <label>Password</label>
    //     <input type="password" className="form-control" placeholder="Password" name="password" required onChange={this.handleChange} />
    // </div>

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} className="w-75">

                <label>Which user are you?</label>
                <input type="number" className="form-control" placeholder="user id" id="userid" />
                <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </form>
        )
    }
 }

export default LoginForm;
