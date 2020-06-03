import React from 'react'
import Alert from "./alert"
import UserProfile from "../authentication/userProfile"

class GenericForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {"errors":[], "user_id":UserProfile.getName()};
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    changeHandler(fieldName, value)
    {
        this.setState({ [fieldName]:value}, ()=>console.log(this.state));
    }

    validateForm()
    {
        let newErrors = [];
        if ("required" in this.props)
        {
            this.props.required.forEach((field)=>{
                if (!this.state[field] || this.state[field].length === 0)
                {
                    newErrors.push("Select "+field+". ");
                }
            });
        }
        return newErrors;
    }


    submitHandler(event)
    {
        event.preventDefault();
        let errors = this.validateForm();
        this.setState({"errors":errors});
        if (errors.length !== 0)
        {
            return;
        }
        let currentState = this.state;
        delete currentState.errors;
        this.props.handler(currentState);
    }

    render()
    {
        let elements = React.Children.toArray(this.props.children);
        elements = elements.map((element)=>React.cloneElement(element, { handler: this.changeHandler }));
        return (
            <>

                {elements}
                <Alert errors={this.state.errors} />
                <button type="submit" className="btn btn-info btn-block my-4" onClick={this.submitHandler}>Submit</button>
            </>

        )
    }

}
export default GenericForm;
