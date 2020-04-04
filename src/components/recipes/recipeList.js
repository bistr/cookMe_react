import React from 'react'
import RecipeCard from "./recipeCard"


class RecipeList extends React.Component
{
    render()
    {
        if (this.props.recipes == null)
        {
            return null;
        }
        const {recipes} = this.props;
        return (
          <div className="card-deck">
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} className="fixed-height"/>
            ))}
          </div>
        )
    }
}

export default RecipeList;
