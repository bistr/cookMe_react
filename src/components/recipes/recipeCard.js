import React from 'react'
import "../../componentsStyle/cardStyle.css"

class RecipeCard extends React.Component
{
    handleClick(recipe, e)
    {
        if("handler" in this.props)
        {
            this.props.handler(recipe);
            return;
        }
        e.preventDefault();
        console.log(recipe.id);
        window.open("/recipe/"+recipe.id);
    }
    render()
    {
        const {recipe} = this.props;
        let classString = `card-img-top ${this.props.className}`
        return (
          <div className="card" tag="a" id={recipe.id} onClick={(e) => this.handleClick(recipe, e)}>
            <img className={classString} src={recipe.photo} alt={recipe.name}></img>
            <div class="card-body">
                <p className="card-text">{recipe.name}</p>
            </div>
        </div>

        )
    }
}

export default RecipeCard
