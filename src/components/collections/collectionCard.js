import React from 'react'
import "../../componentsStyle/cardStyle.css"

class CollectionCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        const win = window.open("/collections/"+this.props.collection.id, '_blank');
        if (win != null) {
            win.focus();
        }
    }
    render()
    {
        const {collection} = this.props;
        let classString = `card-img-top ${this.props.className}`
        return (
          <div className="card" tag="a" onClick={this.handleClick}>

            <img className={classString} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png" alt={collection.name}></img>
            <div class="card-body">
                <p className="card-text">{collection.name}</p>
            </div>
        </div>

        )
    }
}

export default CollectionCard
