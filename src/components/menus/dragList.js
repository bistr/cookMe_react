import React from "react";
import Drag from "./drag";
import RecipeIcon from "../recipes/recipeIcon"

class DragList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={items:this.props.items};
    }

    render()
    {
        if(this.state.items === [])
        {
            return;
        }
        return (
            <div className="drag-drop-container flex-grow list-group">
                {this.props.items.map(item => (
                    <Drag key={item.id} dataItem={JSON.stringify(item)}>
                        <RecipeIcon recipe={item} closeable={false}/>
                    </Drag>
                ))}
            </div>
        );
    }


}

export default DragList;
