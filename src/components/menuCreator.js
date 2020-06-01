
import React from 'react';
import RecipeColumns from './recipes/recipeColumns';
import Filters from "./filters"
import RecipeCard from "./recipes/recipeCard"
import RecipeListGroup from "./recipeListGroup"
import SingleInput from "./genericInputs/singleInput"
import UserProfile from "./userProfile"




class MenuCreator extends React.Component {
      constructor(props)
      {
          super(props)
          this.handleFilter = this.handleFilter.bind(this);
          this.selectCard = this.selectCard.bind(this);
          this.removeItem = this.removeItem.bind(this);
          this.onInput = this.onInput.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
          this.state = {
              recipes: [],
              selected:[],
              user_id:UserProfile.getName()
            }

            let realURL = 'https://cook-me.herokuapp.com/allrecipes'
            fetch(realURL)
            .then(res => res.json())
            .then((data) => {
              this.setState({ recipes: data })
            })

            .catch(console.log)
      }

    handleFilter(parameters)
    {
        fetch('https://cook-me.herokuapp.com/filter', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(parameters),
        })
        .then((response) => response.json())
        .then((data) => {
          this.setState({"recipes":data})
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    submitHandler()
    {
        let days = {}
        days["0"]={}
        days["0"]["0"] = this.state.selected.map(item=>item.id);

        let requestBody = {
            "user_id":this.state.user_id,
            "length":7,
            "days":days,
            "name":this.state.name
        }
        console.log(JSON.stringify(requestBody));
        fetch('https://cook-me.herokuapp.com/upload-menu', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        })
        .then((response) => response.json())
        .then((data) => {
          window.open("/menumaker/"+data.id)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    removeItem(recipe)
    {
        document.getElementById(recipe.id).classList.remove("pressed");
        let currentItems = this.state.selected;
        for( var i = 0; i < currentItems.length; i++)
        {
            if ( currentItems[i] === recipe)
            {
                currentItems.splice(i, 1);
            }
        }
        this.setState({ "selected":currentItems});
    }


    selectCard(recipe, e)
    {
        if(document.getElementById(recipe.id).classList.contains("pressed"))
        {
            this.removeItem(recipe);
            return;
        }
        document.getElementById(recipe.id).classList.add("pressed");
        let currentlySelected = this.state.selected;
        currentlySelected.push(recipe);
        this.setState({ "selected":currentlySelected});
    }

    onInput(name, value)
    {
        this.setState({ [name]:value},()=>console.log(this.state));
    }



  render() {
    if (this.state.recipes === [])
    {
      return null;
    }
    return (
        <>
        <div class="row">
        <Filters className="col-3" handler={this.handleFilter}/>
        {(this.state.recipes.length>0)?(<></>):<div class="alert alert-light" role="alert">
      <strong>No results!</strong> You need to change your search parameters.
  </div>}
        <RecipeColumns className="recipe-card-deck col-7">
        {this.state.recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} handler={this.selectCard}/>
        ))}
        </RecipeColumns>
        <div className="col-2">
        <RecipeListGroup items={this.state.selected} handler={this.removeItem} editable={true}/>
        <SingleInput name="name" placeholder="Menu Name" handler={this.onInput} />
        <button className="btn btn-primary my-2" onClick={this.submitHandler}>Create Menu</button>
        <button className="btn btn-success my-2">Suggest Menu</button>

        </div>


      </div>

      </>
    );
  }
}



export default MenuCreator;
