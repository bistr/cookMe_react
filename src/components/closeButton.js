import React from 'react'

class CloseButton extends React.Component
{

    render()
    {
            return (
                <button type="button" className="close mr-sm-2" aria-label="Close" onClick={()=>this.props.handler(this.props.name)}>
                    <span>&times;</span>
                  </button>

            );
    }
}

export default CloseButton;
