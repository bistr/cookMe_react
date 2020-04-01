import React from 'react'

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
    }

    handleArrayChange(event)
    {
    }

    handleSubmit(event)
    {
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
                    <input type="password" className="form-control" placeholder="Password" name="newPassword" required onChange={this.handleChange} />
                </div>
                <button>Submit</button>
        </form>
        )
    }
 }

export default RegisterForm;
