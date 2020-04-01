import React from 'react'

class DietaryPreferencesInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.preferences = ["vegetarian", "vegan", "gluten-free"];
        this.state={};
        this.preferences.forEach((preference) => {
            this.state[preference]=false;
        });

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e)
    {
        let currentValue = this.state[e.target.name];
        this.setState({ [e.target.name]: !currentValue}, ()=> this.props.handler(this.props.name, this.state));
    }


    render()
    {
        let checkboxes = this.preferences.map(preference =>
            <div className="form-check-inline" key={preference}>
            <input className="form-check-input" type="checkbox" name={preference} value={true} onChange={(e)=>this.changeValue(e)}/>
            <label className="form-check-label" htmlFor={preference}>
              {preference}
            </label>
            </div>
        );
        return(
            <>
              {checkboxes}
            </>
        )
    }
}

export default DietaryPreferencesInput;
