import React from 'react'

class Alert extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e)
    {
        e.preventDefault();

        const win = window.open("/profile/"+this.props.author.id);
        if (win != null) {
            win.focus();
        }
    }
    render()
    {
        let errorMessage =""
        this.props.errors.forEach((error)=>{errorMessage=errorMessage.concat(error)});
        return (
            <>
            {
                (this.props.errors.length!==0)?(<div class="alert alert-danger mt-3" role="alert">
                <strong>Oops! </strong> {errorMessage}
                </div>):(<></>)
            }
            </>
        )
    }
}

export default Alert
