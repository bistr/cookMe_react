import React from 'react'
import UserProfile from "../userProfile"



class AddForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {user_id: UserProfile.getName(), newCollections:[], collections:[]}
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.fetchCollections = this.fetchCollections.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.addCollection = this.addCollection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.fetchCollections();
    }

    fetchCollections()
    {
        //let fakeURL = 'https://5e7ce6e0a917d700166840b4.mockapi.io/postsByRecipe/'+recipeId
        let realURL = "https://cook-me.herokuapp.com/users/"+this.state.user_id+"/collections_without/"+this.props.recipe_id;
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
         this.setState({ collections: data }, ()=>console.log(this.state))

      })
        .catch(console.log)
    }

    handleInput(e)
    {
        this.setState({ [e.target.name]:e.target.value},()=>console.log(this.state));
    }

    handleChange(event)
    {
        event.preventDefault();
        console.log(this.state)
    }


    handleSubmit(e)
    {
        e.preventDefault();
        this.state.newCollections.forEach((collectionID) => {
            let requestBody = {
                "collection_id":collectionID,
                "recipe_id":this.props.recipe_id
            }
            fetch('https://cook-me.herokuapp.com/add_to_collection', {
              method: 'POST',// or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestBody),
            })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        });
        this.props.close();


    }

    addCollection()
    {
        let requestBody = {
            "name":this.state.name,
            "user_id":this.state.user_id
        }
        fetch('https://cook-me.herokuapp.com/add_collection', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        })
        .then((response) => response.json())
        .then((data) => {
          this.fetchCollections(this.state.user_id);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    }

    handleClick(e)
    {
        console.log(e.target.classList);
        e.target.classList.toggle("active");
        console.log(e.target.classList);
        let newCollections = this.state.newCollections;

        if (e.target.classList.contains("active"))
        {
            this.setState({newCollections:newCollections.concat(e.target.id)},()=>console.log(this.state))
        }
        else
        {
            for( var i = 0; i < newCollections.length; i++)
            {
                if (newCollections[i] === e.target.id)
                {
                    newCollections.splice(i,1);
                    this.setState({newCollections:newCollections}, ()=>console.log(this.state));
                }
            }
        }

    }

    render()
    {
        if (this.props.collections == null)
        {
            return null;
        }

        let collectionInput = null;
        let collectionButton = null;
        const plusSign =(<svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                                </svg>);
        const checkSign = (<svg class="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
        </svg>);

        return(
            <>
                <p class="h4 mb-4">Add to collection</p>
                <div class="btn-group-vertical w-100 ">
                {
                    (Object.keys(this.state.collections).length == 0)?(this.props.collections.map((collection) => (
                        <button type="button" id={collection.id} class="btn btn-outline-info btn-lg btn-block text-left my-1" onClick={this.handleClick}>
                        {plusSign} {collection.name}
                        </button>
                    ))):(this.state.collections.map((collection) => (
                        <button type="button" id={collection.id} class="btn btn-outline-info btn-lg btn-block text-left my-1" onClick={this.handleClick}>
                        {plusSign} {collection.name}
                        </button>
                    )))
                }
                <div class="input-group my-1">
                <input type="text" class="form-control" name="name" placeholder="New collection name" onChange={this.handleInput}/>

                <div class="input-group-append ">
                  <button class="btn btn-secondary" type="button" onClick={this.addCollection}>
                  Add
                  </button>
                </div>


                 </div>
            </div>



            <button class="btn btn-success btn-block" onClick={this.handleSubmit}>Add</button>

            </>

    )
    }
 }

export default AddForm;
