import React from 'react'
import CloseButton from "../closeButton"

class IngredientInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {"name":"", "amount":"", "unit":""};
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e)
    {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        this.setState({ [fieldName]: fieldValue },() => {this.props.handler(this.props.name,this.state);});
    }


    render()
    {
        let closeButton= null;
        if ("close" in this.props)
        {
            closeButton = <CloseButton name={this.props.name} handler={this.props.close}/>;
        }
        return(
            <form className="form-inline">
                <input type="text" className="form-control mb-2 mr-sm-2" name="name" placeholder="What is the ingredient?" onChange={(e) => this.handleChange(e)}/>
                <input type="number" className="form-control mb-2 mr-sm-2" name="amount" placeholder="How much?" onChange={(e) => this.handleChange(e)}/>

                <select className="custom-select  mb-2 mr-sm-2" name="unit" onChange={(e) => this.handleChange(e)}>
                    <option value=""></option>
                    <option value="ml">ml</option>
                    <option value="g">g</option>
                    <option value="tbsp">tbsp</option>
                    <option value="tsp">tsp</option>
                </select>
                {closeButton}
            </form>
        )
    }
}

export default IngredientInput;
