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

        <li class="list-group-item d-flex justify-content-between align-items-center">
        {
            ("closeable" in this.props)?
            <button type="button" class="close" aria-label="Close" onClick={()=>this.props.onClick(recipe)}>
                <span className="float-right" aria-hidden="true">&times;</span>
              </button>
            :<></>
        }
          {recipe.name}
          <span class="badge badge-primary badge-pill">14</span>
        </li>
        )
    }
}

export default RecipeCard
