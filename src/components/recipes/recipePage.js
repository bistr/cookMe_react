import React from 'react'
import UserProfile from '../userProfile';
import "../../index.css"
import IngredientsDisplay from "../ingredients/ingredientsDisplay"
import StepsDisplay from "../stepsDisplay"
import ImageDisplay from "../imageDisplay"
import NutritionalInfo from "../nutritionalInfo"
import Modal from '../modal';
import CardList from "../cardList"

class RecipePage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            addModal:false,
            postModal:false,
            user_id:UserProfile.getName()
        }
        console.log(this.state.user_id)
        this.toggleModal = this.toggleModal.bind(this);
        this.fetchRecipe = this.fetchRecipe.bind(this);
        this.fetchPosts = this.fetchPosts.bind(this);
        this.fetchCollections = this.fetchCollections.bind(this);
        this.fetchRecipe(this.props.match.params.id);
        this.fetchPosts(this.props.match.params.id);
        this.fetchCollections(this.props.match.params.id)

        console.log(this.props.match.params.id);

    }

    fetchRecipe(id)
    {
        let realURL = 'https://cook-me.herokuapp.com/recipes/'+id;
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ recipe: data })
        })
        .catch(console.log)
    }

    fetchPosts(id)
    {
        let realURL = 'https://cook-me.herokuapp.com/recipes/'+id+"/posts";
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ posts: data })
        })
        .catch(console.log)
    }

    fetchCollections(id)
    {
        //let fakeURL = 'https://5e7ce6e0a917d700166840b4.mockapi.io/postsByRecipe/'+recipeId
        let realURL = "https://cook-me.herokuapp.com/users/"+this.state.user_id+"/collections_without/"+id;
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ collections: data }, ()=>console.log(this.state))
      })
        .catch(console.log)
    }


    toggleModal(modalName) {
        let currentState = null;
        currentState = this.state[modalName];
        this.setState({
            addModal:false,
            postModal:false
        });
        this.setState({ [modalName]:!currentState});
  }



    render()
    {
        if (this.state.recipe == null)
        {
            return null;
        }
        const {recipe} = this.state;
        return (

            <>
            <Modal show={this.state.postModal} type="postModal" id={recipe.id} handler={this.toggleModal}/>
            <Modal show={this.state.addModal} collections={this.state.collections} type="addModal" id={recipe.id} handler={this.toggleModal}/>
                <div className="row mx-3">
                    <ImageDisplay src={recipe.photo} className="col-lg-8"/>
                    <NutritionalInfo info={recipe.nutrientInfo} className="col-lg-4"/>
                </div>
                <div className="row m-4 justify-content-between">
                    <h1>{recipe.name}</h1>
                    <div class="d-flex align-items-center">
                    <button className="btn btn-success flex-shrink mx-2 rounded-lg" name="postModal" onClick={()=>this.toggleModal("postModal")}> I cooked this! </button>
                    <button className= "btn btn-info flex-shrink mx-2 rounded-lg" name="addModal" onClick={()=>this.toggleModal("addModal")}> Add to collection </button>
                    </div>
                </div>
                <div className="row mx-3 my-1">
                    <IngredientsDisplay ingredients = {recipe.ingredients} className="w-100"/>
                </div>
                <div className="row mx-3 d-flex justify-content-between">
                    <StepsDisplay steps= {recipe.steps} className=""/>

                </div>
                <div className="row mx-3 my-5">
                    <p> Posts about {recipe.name} </p>
                    <CardList type="posts" items={this.state.posts}/>
                </div>

            </>
        )
    }
};

export default RecipePage;
