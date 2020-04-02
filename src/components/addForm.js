import React from 'react'
import "../index.css"


class AddForm extends React.Component
{
    constructor(props)
    {
        super(props);
        //this.state={recipeId:this.props.match.params.id};
        this.state = {recipeId:this.props.id}
        this.handleChange = this.handleChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.fetchCollections = this.fetchCollections.bind(this);
        this.fetchCollections(1);


    }

    fetchCollections(userID)
    {
        //let fakeURL = 'https://5e7ce6e0a917d700166840b4.mockapi.io/postsByRecipe/'+recipeId
        let realURL = "https://cook-me.herokuapp.com/users/"+userID+"/collections"
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ collections: data }, ()=>console.log(this.state))
      })
        .catch(console.log)
    }

    handleComponentChange(nameOfField, valueOfField)
    {
        this.setState({ [nameOfField]:valueOfField},()=>console.log(this.state));
    }

    handleChange(event)
    {
        event.preventDefault();
        console.log(this.state)
    }


    handleArrayChange(event)
    {
    }

    handleSubmit(event)
    {
    }

    render()
    {
        if (this.state.collections == null)
        {
            return null;
        }
        return(
            <>
                <p class="h4 mb-4">Add to collection</p>
                <div class="btn-group-vertical w-100 ">
                    {
                        this.state.collections.map((collection) => (
                            <button type="button" class="btn btn-outline-primary btn-lg btn-block text-left my-1">
                            <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                            </svg> {collection.name}
                            </button>
                        ))
                    }
                    <div class="input-group my-1">
                  <div class="input-group-prepend ">
                    <button class="btn btn-secondary" type="button">
                    <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                    </svg> New
                    </button>
                  </div>
                  <input type="text" class="form-control" placeholder="" aria-label=""/>
                </div>
                </div>



            <button class="btn btn-primary btn-block" type="submit">Add</button>

            </>

    )
    }
 }

export default AddForm;
