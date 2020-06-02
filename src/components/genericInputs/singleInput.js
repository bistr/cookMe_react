import React from 'react'
import CloseButton from "../closeButton"

class SingleInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e)
    {
        this.props.handler(this.props.name, e.target.value);
    }

    render() {
        let closeButton = null;
        if ("close" in this.props)
        {
            closeButton = <CloseButton name={this.props.name} handler={this.props.close} className="mb-2 mr-sm-2"/>;
        }
        let placeholder = null;

        if("placeholder" in this.props)
        {
            placeholder = this.props.placeholder;
        }
        else
        {
            placeholder = this.props.name.replace(/^\w/, c => c.toUpperCase());
        }
        let type="text"
        if("type" in this.props)
        {
            type = this.props.type;
        }

        let className = "form-control mb-2 mr-sm-2 ";
        if ("className" in this.props)
        {
            className = className.concat(this.props.className);
        }

        let requiredFlag = false;
        if ("required" in this.props)
        {
            requiredFlag = true;
        }

        if ("textarea" in this.props)
        {
            return(
                <textarea className={className} type = {type} placeholder={placeholder} rows="3" onChange={(e)=>this.changeValue(e)}/>
            )
        }
        return(
            <input className={className} required={requiredFlag} placeholder={placeholder} type = {type} onChange={(e)=>this.changeValue(e)}/>
        );
    }
}

export default SingleInput;
