import React from 'react'
import { sha256 } from 'js-sha256';

class RegisterForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            success: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleArrayChange = this.handleArrayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({ [event.target.name]:event.target.value}, ()=>console.log(this.state));
    }

    handleArrayChange(event)
    {
    }

    handleSubmit(event)
    {
        event.preventDefault()
        fetch('https://cook-me.herokuapp.com/register', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: JSON.stringify({"username":this.state.username, "password":sha256(this.state.password)}),
        })
        .then((response) => response.json())
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
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" name="username" required onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password" required onChange={this.handleChange} />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
        </form>
        )
    }
 }

export default RegisterForm;
