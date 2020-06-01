
import React from 'react';
import RecipeColumns from './recipes/recipeColumns';
import RatingIcons from "./recipes/ratingIcons"
import DietaryPreferencesInput from "./dietaryPreferencesInput"



class Filters extends React.Component {

      constructor(props)
      {
          super(props);
          this.state={};
          this.handleChange = this.handleChange.bind(this);
          this.handleSlider = this.handleSlider.bind(this);

      }

      handleChange(name, value)
      {
          this.setState({ [name]:value}, ()=>console.log(this.state));
      }

      handleSlider(event)
      {
          this.setState({ "calories":event.target.value}, ()=>console.log(this.state));
      }



  render() {
    return (
    <>
    <div class={"d-flex flex-column "+this.props.className}>
                <DietaryPreferencesInput  handler={this.handleChange} />
                <div class="dropdown-divider">
                </div>
                <label> Under <small>{this.state.calories}</small> calories</label>
                <input type="range" class="custom-range" min="100" max="2000" step="50" id="customRange3" onChange={this.handleSlider}/>
                <section className="my-4">
                    <RatingIcons name="time" handler={this.handleChange}/>
                </section>
                <section className="my-4">
                    <RatingIcons name="price" handler={this.handleChange}/>
                </section>
                <section className="my-4">
                    <RatingIcons name="difficulty" handler={this.handleChange} />
                </section>
                <button className="btn btn-primary my-2">Filter</button>

    </div>
     </>
    );
  }
}



export default Filters;
