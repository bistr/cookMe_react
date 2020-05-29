import React from 'react'
import "../../componentsStyle/cardStyle.css"

class RecipeCard extends React.Component
{
    handleClick(id, e)
    {
        e.preventDefault();
        console.log(id);
        const win = window.open("/recipe/"+id);
    }
    render()
    {
        const {recipe} = this.props;
        let classString = `card-img-top ${this.props.className}`
        return (
          <div className="card" tag="a" onClick={(e) => this.handleClick(recipe.id, e)}>
            <img className={classString} src={recipe.photo} alt={recipe.name}></img>
            <div class="card-body">
                <p className="card-text">{recipe.name}</p>
            </div>
        </div>

        )
    }
}

export default RecipeCard
