import React from 'react'
import SingleInput from "../genericInputs/singleInput"
import DynamicInputs from "../genericInputs/dynamicInputs"
import DietaryPreferencesInput from "../dietaryPreferencesInput"

class UploadForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            ingredients:[],
            steps:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.openRecipePage = this.openRecipePage.bind(this);

    }

    handleComponentChange(nameOfField, valueOfField)
    {
        this.setState({ [nameOfField]:valueOfField},()=>console.log(this.state));
    }

    handleChange(event)
    {
        console.log(this.state)
        //dWfgEUED0f1JYAo0swEZ4GLUlrOtUBPoqlBh1MpC
    }

    openRecipePage(id)
    {
        const win = window.open("/recipe/"+id);
        if (win != null) {
            win.focus();
        }
    }


    handleSubmit(e)
    {
        e.preventDefault()
        fetch('https://cook-me.herokuapp.com/upload', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        })
        .then((response) => response.json())
        .then((data) => {
          this.openRecipePage(data.id);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    render()
    {

        return(
            <div className="d-flex flex-column text-center m-2">
            <p className="h4 my-5">Tell us about your recipe!</p>
            <div className="row mx-3">
                <SingleInput className="col-lg" name="name" handler={this.handleComponentChange}/>
                <SingleInput name="photo" className="col-lg" handler={this.handleComponentChange}/>
            </div>
            <hr />
            <DynamicInputs name="ingredients" handler={this.handleComponentChange}/>
            <div className="row mt-3 justify-content-center">
                <DietaryPreferencesInput name="preferences" handler={this.handleComponentChange}/>
            </div>
            <hr />
            <DynamicInputs name="steps" handler={this.handleComponentChange}/>
            <button className="btn btn-info btn-block my-5" onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }
 }

export default UploadForm;
