import React from 'react'
import "../../componentsStyle/recipeCard.css"

class RecipeCard extends React.Component
{
    handleClick(id, e)
    {
        e.preventDefault();
        console.log(id);
        const win = window.open("/recipe/"+id, '_blank');
        if (win != null) {
            win.focus();
        }
    }
    render()
    {
        const {recipe} = this.props;
        return (
          <div className="card" tag="a" onClick={(e) => this.handleClick(recipe.id, e)}>

            <img className="card-img-top" src={recipe.photo} alt={recipe.name}></img>
            <div class="card-body">
                <p className="card-text">{recipe.name}</p>
            </div>
        </div>

        )
    }
}

export default RecipeCard
