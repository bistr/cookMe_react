import React from 'react'
import "../componentsStyle/authorInfo.css"

class AuthorInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e)
    {
        e.preventDefault();

        const win = window.open("/authors/"+this.props.author.id);
        if (win != null) {
            win.focus();
        }
    }
    render()
    {
        const {author} = this.props;
        let classNameString = `card-inline ${ this.props.className }`;
        return (
            <div class={classNameString}>
              <div class="card-body d-flex flex-column justify-content-center">
                <h4 class="card-title text-center">{author.real_name}</h4>
                <h6 class="card-subtitle text-center text-muted">Author of post</h6>
                <img class="card-img my-2 img-thumbnail rounded-circle w-100" alt="author portrait" src={author.photo}/>
                <p class="card-text my-1 text-center">
                  {author.bio}
                </p>
              </div>
            </div>
        )
    }
}

export default AuthorInfo
