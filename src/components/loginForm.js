import React from 'react'

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
            <div className="container d-flex flex-column my-5">
                <p className="display-4 my-3">What kinds of kitchenware do you own?</p>
                <img src="https://i.ibb.co/hmZqJg6/Screenshot-from-2020-03-27-23-38-26.png" className="img-fluid my-3"/>
                <button className="btn btn-primary">Add kitchenware</button>
        </div>
        )
    }
 }

export default LoginForm;
