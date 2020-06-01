
import React from 'react';
import RecipeColumns from './recipes/recipeColumns';
import Filters from "./filters"
import RecipeCard from "./recipes/recipeCard"




class Search extends React.Component {
      constructor(props)
      {
          super(props)
          this.handleFilter = this.handleFilter.bind(this);
          this.state = {
              recipes: []
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
        <RecipeColumns className="recipe-card-deck col-9" recipes = {this.state.recipes}>
        {this.state.recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}/>
        ))}
        </RecipeColumns>

      </div>

      </>
    );
  }
}



export default Search;
