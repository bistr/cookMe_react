import React from 'react'
import RecipeCard from "./recipeCard"


class RecipeList extends React.Component
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

export default RecipeList
