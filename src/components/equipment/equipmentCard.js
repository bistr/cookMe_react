import React from 'react'
import "../../componentsStyle/cardStyle.css"
class EquipmentCard extends React.Component
{

    render()
    {
        let imgSource = `${process.env.PUBLIC_URL}/images/${ this.props.name }.png`;
        let classString = `card-equipment-img col-md-1 col-lg-4 m-1 flex-md-wrap ${this.props.className}`
        return(
          <img className={classString} src={imgSource} id={this.props.name} alt={this.props.name} onClick={(e)=>this.props.handler(this.props.name, e)}/>
        )
    }
}

export default EquipmentCard
