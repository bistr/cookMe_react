import React from 'react'
import "../../componentsStyle/cardStyle.css"

class RecipeCard extends React.Component
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
            ("closeable" in this.props)?
            <button type="button" className="close" aria-label="Close" onClick={()=>this.props.onClick(recipe)}>
                <span className="float-right" aria-hidden="true">&times;</span>
              </button>
            :<></>
        }
          {recipe.name}
          <span className="badge badge-primary badge-pill">{recipe.nutrientInfo.Calories}</span>
        </li>
        )
    }
}

export default RecipeCard
