
import React, {Component} from 'react';
import RecipeColumns from './components/recipes/recipeColumns';
import "./index.css"
import "./App.css"
import RecipeCard from "./components/recipes/recipeCard"



class App extends Component {
    state = {
        recipes: []
      }

      constructor(props)
      {
          super(props)
          this.makeItShow=this.makeItShow.bind(this)
      }

    componentDidMount() {
        let realURL = 'https://cook-me.herokuapp.com/allrecipes'
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ recipes: data })
        })
        .catch(console.log)
    }

  makeItShow()
  {
      document.getElementsByClassName("dropdown-menu")[0].classList.toggle("show");
  }

  render() {
    if (this.state.recipes === [])
    {
      return null;
    }
    return (
    <>
      <RecipeColumns recipes = {this.state.recipes}>
      {this.state.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe}/>
      ))}
      </RecipeColumns>
      </>
    );
  }
}



export default App;
