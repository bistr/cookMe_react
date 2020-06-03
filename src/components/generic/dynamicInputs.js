import React from 'react'
import IngredientInput from "../ingredients/ingredientInput"
import SingleInput from "./singleInput"



class DynamicInputs extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { inputs: ['input-0']};
        this.addElement = this.addElement.bind(this);
        this.saveAllElements = this.saveAllElements.bind(this);
        this.appendInput = this.appendInput.bind(this);
        this.removeInput = this.removeInput.bind(this);
    }

    saveAllElements()
    {
        var elements = this.state.inputs.map(input => this.state[input]);
        this.props.handler(this.props.name, elements);
    }

    addElement(key, element)
    {
        this.setState({ [key]:element }, ()=>this.saveAllElements());
    }

    render()
    {
        let inputFields = [];

        if (this.props.name === "ingredients")
        {
            inputFields = this.state.inputs.map(input => <IngredientInput key={input} name={input} handler={this.addElement} close={this.removeInput}/>);

        }
        else if (this.props.name === "steps")
        {
            inputFields = this.state.inputs.map(input => <SingleInput key={input} name={input} placeholder="What is the step?" handler={this.addElement} close={this.removeInput}/>);
        }

        return(
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h4 className="text-capitalize text-dark my-4">{this.props.name}</h4>
                {inputFields}
                <button className="btn btn-info rounded-circle" onClick={this.appendInput}>
                <svg className="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd"/>
                </svg>
                </button>
            </div>
        );
    }

    appendInput(e) {
        e.preventDefault();
        var newInput = null;
        if (this.state.inputs.length === 0)
        {
            newInput = "input-0";

        }
        else
        {
            var lastInput = this.state.inputs[this.state.inputs.length-1];

            newInput = `${lastInput}1`
        }
;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }

    removeInput(name)
    {
        console.log(name);
        var newInputs = this.state.inputs;
        for( var i = 0; i < newInputs.length; i++)
        {
            if ( newInputs[i] === name)
            {
                newInputs.splice(i,1);
                this.setState({inputs:newInputs});
            }
        }
        this.saveAllElements();
    }
}

export default DynamicInputs;
