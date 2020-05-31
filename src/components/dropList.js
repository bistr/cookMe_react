import React from "react";
import DropTarget from "./dropTarget";
import RecipeIcon from "./recipes/recipeIcon"

class DropList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={items:[]};
        this.itemDropped = this.itemDropped.bind(this);
        this.removeItem = this.removeItem.bind(this);

    }

    itemDropped(item)
    {
        let currentItems = this.state.items;

        currentItems.push(item);
        this.setState({"items":currentItems});
    }

    removeItem(recipe)
    {
        console.log(recipe);
        let currentItems = this.state.items;
        for( var i = 0; i < currentItems.length; i++)
        {
            if ( currentItems[i] === recipe)
            {
                currentItems.splice(i, 1);
            }
        }
        // currentItems.push(item);
        // onClick={this.removeItem(recipe)}
        this.setState({"items":currentItems});

    }

    render()
    {
        return (
            <DropTarget onItemDropped={this.itemDropped}>
                <div className="drag-drop-container list-group">
                    {this.state.items.map(recipe => (
                        <RecipeIcon recipe={recipe} id={recipe.id} onClick={this.removeItem} closeable="true"/>
                    ))}
                </div>
            </DropTarget>
        );
    }


}

export default DropList;
