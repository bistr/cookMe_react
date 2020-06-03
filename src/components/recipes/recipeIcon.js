import React from 'react'
import "../../componentsStyle/cardStyle.css"
import CloseButton from "../closeButton"

class RecipeIcon extends React.Component
{
    handleClick()
    {

        console.log("nothing");
    }

    render()
    {
        const {recipe} = this.props;
        return (

        <li className="list-group-item d-flex justify-content-between align-items-center">
        {
            ("closeable" in this.props && this.props.closeable===true)?
            <CloseButton handler={()=>this.props.onClick(recipe)} />
            :<></>
        }
          {recipe.name}
          {
              (recipe.nutrientInfo)?<span className="badge badge-primary badge-pill">{recipe.nutrientInfo.Calories}</span>:<></>
          }

        </li>
        )
    }
}

export default RecipeIcon
