import React from "react";
import DropTarget from "./dropTarget";
import RecipeIcon from "./recipes/recipeIcon"

class DropList extends React.Component {
    constructor(props)
    {
        super(props);


            if (!this.props.recipes)
            {
                this.state={items:[]};
            }
            else if (!this.props.recipes[this.props.mealNumber])
            {
                this.state={items:[]};
            }
            else
            {
                this.state={items:this.props.recipes[this.props.mealNumber]};
                this.props.handler(this.props.mealNumber, this.state.items.map((item)=>item.id));
            }

            console.log(this.props.recipes);



        this.itemDropped = this.itemDropped.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.getAllCalories = this.getAllCalories.bind(this);

    }

    itemDropped(item)
    {
        let currentItems = this.state.items;

        currentItems.push(item);
        this.setState({"items":currentItems}, ()=>{
            this.props.handler(this.props.mealNumber, this.state.items.map((item)=>item.id));
            this.props.calorieCounter(this.props.mealNumber, this.getAllCalories());
        });

    }

    removeItem(recipe)
    {
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
        this.setState({"items":currentItems}, ()=>{
            this.props.handler(this.props.mealNumber, this.state.items.map((item)=>item.id));
            this.props.calorieCounter(this.props.mealNumber, this.getAllCalories());
        });


    }

    getAllCalories()
    {
        let calories = 0;
        this.state.items.forEach((item) => {
            calories+=item.nutrientInfo.Calories;
        });
        return calories;

    }

    render()
    {

        return (
            <DropTarget onItemDropped={this.itemDropped}>
                <h2>{this.props.name} <small className="float-right">{this.getAllCalories()}</small></h2>
                <div className="drag-drop-container flex-grow list-group">
                    {this.state.items.map(recipe => (
                        <RecipeIcon recipe={recipe} key={recipe.id} id={recipe.id} onClick={this.removeItem} closeable={this.props.editable}/>
                    ))}
                </div>
            </DropTarget>
        );
    }


}

export default DropList;
