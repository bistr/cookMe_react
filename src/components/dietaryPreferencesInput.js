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
            <div class="custom-control custom-checkbox dropdown-item mx-1 w-100" key={preference}>
                <input type="checkbox" class="custom-control-input" id={preference} name={preference} value={true} onChange={(e)=>this.changeValue(e)}/>
                <label class="custom-control-label" htmlFor={preference}>{preference}</label>
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
