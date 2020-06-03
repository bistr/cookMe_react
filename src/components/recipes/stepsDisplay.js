import React from 'react'

class StepsDisplay extends React.Component
{

    render()
    {
        let classNameString = `my-4 d-inline ${ this.props.className }`;
        return (
        <div className = {classNameString}>
        <h4 className="mb-4">Steps</h4>
          {this.props.steps.map((step) => (
            <div>
                <p class="">{step.description}</p>

            <hr></hr>
            </div>
          ))}
        </div>
        )
    }

};

export default StepsDisplay
