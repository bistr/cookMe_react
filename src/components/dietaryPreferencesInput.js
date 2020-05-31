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
        let preference = e.target.name;
        let currentValue = this.state[preference];
        this.setState({ [preference]: !currentValue}, ()=> this.props.handler(preference, !currentValue));
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
