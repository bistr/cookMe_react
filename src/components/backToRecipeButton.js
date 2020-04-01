import React from 'react'

class BackToRecipeButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e)
    {
        e.preventDefault();

        const win = window.open("/recipe/"+this.props.id);
        if (win != null) {
            win.focus();
        }
    }
    render()
    {
        const {recipe} = this.props;
        return (
          <button className="btn btn-primary" onClick={(e) => this.handleClick(e)}>
          <svg class="bi bi-arrow-left-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
            </svg>
          {this.props.text}
          </button>
        )
    }
}

export default BackToRecipeButton
