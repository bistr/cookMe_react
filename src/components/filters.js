
import React from 'react';
import RatingIcons from "./recipes/ratingIcons"
import DietaryPreferencesInput from "./recipes/dietaryPreferencesInput"



class Filters extends React.Component {

      constructor(props)
      {
          super(props);
          this.state={};
          this.handleChange = this.handleChange.bind(this);
          this.handleSlider = this.handleSlider.bind(this);
          this.handleFilter = this.handleFilter.bind(this);
          this.handleInput = this.handleInput.bind(this);

      }

      handleChange(name, value)
      {
          if (name === "vegan" || name==="vegetarian" || name==="gluten-free")
          {
              if (value === false)
              {
                  let currentState = this.state;
                  delete currentState[name]
                  this.setState(currentState)
                  return;
              }
          }
          this.setState({ [name]:value}, ()=>console.log(this.state));
      }

      handleSlider(event)
      {
          this.setState({ "calories":event.target.value}, ()=>console.log(this.state));
      }

      handleFilter()
      {
          this.props.handler(this.state);
      }

      handleInput()
      {
          let value = document.getElementById("inputName").value;
          if (value === "")
          {
              let currentState = this.state;
              delete currentState["name"]
              this.setState(currentState)
              return;
          }
          this.setState( {"name":value})
      }



  render() {
    return (
    <>
    <div class={"d-flex flex-column "+this.props.className}>
                <input className="form-control" id="inputName" placeholder="What are you looking for?" onChange={this.handleInput}></input>
                <div class="dropdown-divider">
                </div>
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
                <button className="btn btn-primary my-2" onClick={this.handleFilter}>Filter</button>

    </div>
     </>
    );
  }
}



export default Filters;
