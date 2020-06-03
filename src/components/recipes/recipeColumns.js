import React from 'react'


class RecipeColumns extends React.Component
{
    render()
    {
        return (
          <div className={"card-columns " + this.props.className}>
          {this.props.children}
          </div>
        )
    }
}

export default RecipeColumns
