
import React, {Component} from 'react';
import RecipeColumns from '../recipes/recipeColumns';


class CollectionPage extends Component {

      constructor(props)
      {
          super(props);
          this.state = {recipes: []};
          this.makeItShow=this.makeItShow.bind(this)
          this.fetchRecipes = this.fetchRecipes.bind(this);
          let collectionID = this.props.match.params.id;
          this.fetchRecipes(collectionID);
      }

      fetchRecipes(id) {
        let realURL = 'https://cook-me.herokuapp.com/collections/'+id;
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ recipes: data["recipes"] })
        })
        .catch(console.log)
    }

  makeItShow()
  {
      document.getElementsByClassName("dropdown-menu")[0].classList.toggle("show");
  }

  render() {
    if (this.state.recipes == [])
    {
      return null;
    }
    return (
    <>
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
      <RecipeColumns recipes = {this.state.recipes}/>
      </>
    );
  }
}



export default CollectionPage;
