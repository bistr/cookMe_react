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

        let className = "form-control mb-2 mr-sm-2 ";
        if ("className" in this.props)
        {
            className = className.concat(this.props.className);
        }

        if ("close" in this.props)
        {
            className = className.concat(" w-auto d-inline col-lg-8 col-10");
            return(
                <div className="d-flex w-100 justify-content-center align-items-center">
                <textarea className={className} placeholder={placeholder} type="text" rows="1" onChange={(e)=>this.changeValue(e)}/>
                {closeButton}
                </div>
            )
        }
        return(
            <input className={className} placeholder={placeholder} type="text" onChange={(e)=>this.changeValue(e)}/>
        );
    }
}

export default SingleInput;
