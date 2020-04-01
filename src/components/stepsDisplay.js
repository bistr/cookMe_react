import React from 'react'

class StepsDisplay extends React.Component
{

    render()
    {
        let classNameString = ` ${ this.props.className }`;
        return (
        <div className = {classNameString}>
        <h4 className="my-3">Steps</h4>
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
