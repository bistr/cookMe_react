
import React from 'react';
import RecipeColumns from './recipes/recipeColumns';
import Filters from "./filters"




class MenuCreator extends React.Component {
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
        <div class="row">
        <Filters className="col-3" />
      <RecipeColumns className="recipe-card-deck col-9" recipes = {this.state.recipes}/>
      </div>
      </>
    );
  }
}



export default MenuCreator;
