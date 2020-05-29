import React from 'react'
import RecipeCard from "./recipeCard"


class RecipeColumns extends React.Component
{
    render()
    {
        const {recipes} = this.props;
        return (
          <div className="card-columns">
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe}/>
            ))}
          </div>
        )
    }
}

export default RecipeColumns