import React from 'react'
import "../componentsStyle/imageDisplay.css"

class ImageDisplay extends React.Component
{
    render()
    {
        let classNameString = `imageContainer d-inline ${ this.props.className }`;
        return(
            <div className={classNameString}>
                <img className="photo" src={this.props.src} alt="recipe"/>
            </div>
        )
    }
}

export default ImageDisplay;
