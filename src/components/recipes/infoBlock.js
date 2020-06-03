import React from 'react'
import RatingIcons from "./ratingIcons"
import EquipmentIcons from "../equipment/equipmentIcons"

class InfoBlock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }


    render()
    {

        console.log(this.props)
        if (this.props.recipe==null)
        {
            return null;
        }
        let classNameString = `d-inline flex-column my-4 ${ this.props.className }`;


        return (
            <div className={classNameString}>
                <section className="my-2">
                <RatingIcons name="difficulty" info={this.props.recipe.difficulty} />
                </section>
                <section className="my-2">
                <RatingIcons name="time" info={this.props.recipe.time}/>
                </section>
                <section className="my-2">
                <RatingIcons name="price" info={this.props.recipe.price} />
                </section>
                <section className="my-4 d-flex flex-wrap">
                <EquipmentIcons equipment={this.props.recipe.equipment} />
                </section>

            </div>

        )
    }

};

export default InfoBlock
