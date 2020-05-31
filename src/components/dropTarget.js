import React from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./dropEffects";

const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};


class DropTarget extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={isOver:false};
        this.draggingOver=this.draggingOver.bind(this);
        this.draggingEnter=this.draggingEnter.bind(this);
        this.draggingLeave=this.draggingLeave.bind(this);
        this.drop=this.drop.bind(this);
    }

    draggingOver(event)
    {
        event.preventDefault();
        event.dataTransfer.dropEffect = dropEffects.All;
    }

    drop(event)
    {
        const droppedItem = event.dataTransfer.getData("drag-item");
        console.log(droppedItem);
        if (droppedItem) {
            this.props.onItemDropped(JSON.parse(droppedItem));
        }
        this.setState({"isOver":false});
    }

    draggingEnter(event)
    {
        event.dataTransfer.dropEffect = dropEffects.All;
        this.setState({"isOver":true});
    }

    draggingLeave()
    {
        this.setState({"isOver":false});
    }

    render()
    {
        return (
            <div
                onDragOver={this.draggingOver}
                onDrop={this.drop}
                onDragEnter={this.draggingEnter}
                onDragLeave={this.draggingLeave}
                style={{ width: "100%", height: "30%", ...(this.state.isOver ? insideStyle : {}) }}
            >
                {this.props.children}
            </div>
        );
    }
}


export default DropTarget;
