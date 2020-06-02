
import React, {Component} from 'react';
import RecipeColumns from './components/recipes/recipeColumns';
import "./index.css"
import "./App.css"
import RecipeCard from "./components/recipes/recipeCard"
import Utilities from "./components/utilities"



class App extends Component {
    state = {
        recipes: []
      }

      constructor(props)
      {
          super(props)
          Utilities.sendRequestGet('https://cook-me.herokuapp.com/allrecipes')
          .then((data) => {
            this.setState({ recipes: data })
          })
          .catch(console.log);
      }


  render() {
    if (this.state.recipes === [])
    {
      return null;
    }
    return (
        <RecipeColumns recipes = {this.state.recipes}>
        {this.state.recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}/>
        ))}
        </RecipeColumns>
    );
  }
}



export default App;
