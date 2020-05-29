import React from 'react'
import "../componentsStyle/cardStyle.css"
class EquipmentCard extends React.Component
{
    constructor(props)
    {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    render()
    {
        let imgSource = `${process.env.PUBLIC_URL}/images/${ this.props.name }.png`;
        let classString = `card-img-top card-equipment-img ${this.props.className}`
        return(
        // <div class="card post-card" tag="a" onClick={(e)=>this.handleClick(post.id, e)}>
        <div class="card equipment-card" id={this.props.name} tag="a" onClick={(e)=>this.props.handler(this.props.name, e)}>
          <img className={classString} src={imgSource} alt={this.props.name}/>
          <div class="card-body">
              <p className="card-text">{this.props.name}</p>
          </div>
        </div>
        )
    }
}

export default EquipmentCard
