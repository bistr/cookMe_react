import React from 'react'
import RecipeCard from "./recipes/recipeCard"
import PostCard from "./posts/postCard"
import CollectionCard from "./collections/collectionCard"



class CardList extends React.Component
{
    constructor(props)
    {
        super(props)
        this.makeComponent = this.makeComponent.bind(this);
    }

    makeComponent(item)
    {
        if (this.props.type === "recipes")
        {
            return <RecipeCard recipe={item} className="fixed-height "/>;
        }
        if (this.props.type === "posts")
        {
            return <PostCard post={item}/>
        }
        if (this.props.type === "collections")
        {
            return <CollectionCard collection={item}/>
        }
    }

    render()
    {
        //think about a more button
        let classNameString = `card-deck ${ this.props.className }`;
        if (this.props.items == null)
        {
            return null;
        }
        const {items} = this.props;
        return (
          <div className={classNameString}>
            {items.map((item) => this.makeComponent(item))}
          </div>
        )
    }
}

export default CardList;
