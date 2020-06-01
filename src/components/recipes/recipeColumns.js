import React from 'react'
import RecipeCard from "./recipeCard"


class RecipeColumns extends React.Component
{
    render()
    {
        const {recipes} = this.props;
        return (
          <div className={"card-columns " + this.props.className}>
          {this.props.children}
          </div>
        )
    }
}

export default RecipeColumns
