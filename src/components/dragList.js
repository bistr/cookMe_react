import React from "react";
import Drag from "./drag";
import RecipeIcon from "./recipes/recipeIcon"

class DragList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={items:this.props.items};
    }

    render()
    {
        if(this.state.items == [])
        {
            return;
        }
        console.log(this.props.items);
        return (
            <div className="drag-drop-container list-group">
                {this.props.items.map(item => (
                    <Drag key={item.id} dataItem={JSON.stringify(item)}>
                        <RecipeIcon recipe={item}/>
                    </Drag>
                ))}
            </div>
        );
    }


}

export default DragList;
