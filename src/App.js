
import React, {Component} from 'react';
import RecipeList from './components/recipes/recipeList';
import "./index.css"
import "./App.css"



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
        let fakeURL = 'https://5e7ce6e0a917d700166840b4.mockapi.io/allRecipes'
        let realURL = 'https://cook-me.herokuapp.com/recipes'
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
    <div className="container-fluid">
    <div class="input-group my-1">
      <div class="input-group-prepend">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.makeItShow}>Filter</button>
        <div class="dropdown-menu">
        <div class="custom-control custom-checkbox dropdown-item mx-1">
          <input type="checkbox" class="custom-control-input" id="customCheck1"/>
          <label class="custom-control-label" for="customCheck1">Vegan</label>
        </div>
        <div class="custom-control custom-checkbox dropdown-item mx-1">
          <input type="checkbox" class="custom-control-input" id="customCheck2"/>
          <label class="custom-control-label" for="customCheck2">Vegetarian</label>
        </div>
        <div class="custom-control custom-checkbox dropdown-item mx-1">
          <input type="checkbox" class="custom-control-input" id="customCheck3"/>
          <label class="custom-control-label" for="customCheck3">Gluten-free</label>
        </div>
    <div class="dropdown-divider"></div>
      <div class="custom-control custom-checkbox dropdown-item">
      <small>Calories</small>
        <input type="range" class="form-control-range dropdown-item"/>
      </div>


        </div>

      </div>
      <input type="text" class="form-control" placeholder="What are you looking for?" aria-label="Text input with dropdown button"/>
    </div>
      <RecipeList recipes = {this.state.recipes}/>
      </div>
    );
  }
}



export default App;
