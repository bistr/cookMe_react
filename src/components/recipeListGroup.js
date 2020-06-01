import React from 'react'
import RecipeIcon from "./recipes/recipeIcon"


class RecipeListGroup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={"items":[]};
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(recipe)
    {
        this.props.handler(recipe);
    }

    render()
    {
        const {recipe} = this.props;
        let classString = `card-img-top ${this.props.className}`
        return (
            <div className="drag-drop-container flex-grow list-group">
                {this.props.items.map(recipe => (
                    <RecipeIcon recipe={recipe} key={recipe.id} id={recipe.id} onClick={this.removeItem} closeable={true}/>
                ))}
            </div>
        )
    }
}

export default RecipeListGroup
