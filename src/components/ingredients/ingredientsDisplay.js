import React from 'react'

class IngredientsDisplay extends React.Component
{
    render()
    {
        return (
        <>
          {this.props.ingredients.map((ingredient) => (
            <div class="list-group-item col-md-6">
                <h5>{ingredient.name}</h5>
                <small>{ingredient.amount}{ingredient.unit}</small>
            </div>
          ))}
        </>
        )
    }

};

export default IngredientsDisplay
