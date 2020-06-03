import React from "react";

const draggingStyle = {
    opacity: 0.25,
};


class Drag extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isDragging:false};
        this.startDragging = this.startDragging.bind(this);
        this.endDragging = this.endDragging.bind(this);
    }

    startDragging(event)
    {
        this.setState({isDragging:true});
        event.dataTransfer.setData("drag-item", this.props.dataItem);
        //event.dataTransfer.effectAllowed = this.props.dropEffect;

    }

    endDragging()
    {
        this.setState({isDragging:false});
    }

    render()
    {
        return (
            <div style={this.state.isDragging ? draggingStyle : {}} draggable onDragStart={this.startDragging} onDragEnd={this.endDragging}>
                {this.props.children}
            </div>
        );
    }
}

export default Drag;
