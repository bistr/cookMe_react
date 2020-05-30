import React from 'react'
import "../../componentsStyle/cardStyle.css"
class EquipmentCard extends React.Component
{
    constructor(props)
    {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        // <div class="card-body">
        //     <p className="card-text">{this.props.name}</p>
        // </div>
    }

    render()
    {
        let imgSource = `${process.env.PUBLIC_URL}/images/${ this.props.name }.png`;
        let classString = `card-equipment-img col-md-1 col-lg-4 m-1 flex-md-wrap ${this.props.className}`
        return(
        // <div class="card post-card" tag="a" onClick={(e)=>this.handleClick(post.id, e)}>
          <img className={classString} src={imgSource} id={this.props.name} alt={this.props.name} onClick={(e)=>this.props.handler(this.props.name, e)}/>
        )
    }
}

export default EquipmentCard
