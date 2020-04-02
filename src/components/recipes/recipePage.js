import React from 'react'
import "../../index.css"
import IngredientsDisplay from "../ingredients/ingredientsDisplay"
import StepsDisplay from "../stepsDisplay"
import ImageDisplay from "../imageDisplay"
import NutritionalInfo from "../nutritionalInfo"
import Modal from '../modal';
import PostList from "../posts/postList"

class RecipePage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            addModal:false,
            postModal:false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.fetchRecipe = this.fetchRecipe.bind(this);
        this.fetchRecipe(this.props.match.params.id);
        console.log(this.props.match.params.id);

    }

    fetchRecipe(id)
    {
        let fakeURL ='https://5e7ce6e0a917d700166840b4.mockapi.io/allRecipes/'+id;
        let realURL = 'https://cook-me.herokuapp.com/recipes/'+id;
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ recipe: data })
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

            <div className = "container-fluid">
            <Modal show={this.state.postModal} type="postModal" id={recipe.id} handler={this.toggleModal}/>
            <Modal show={this.state.addModal} type="addModal" id={recipe.id} handler={this.toggleModal}/>
                <div className="row mx-3">
                    <ImageDisplay src={recipe.photo} className="col-lg-8"/>
                    <NutritionalInfo ingredients={recipe.ingredients} className="col-lg-4"/>
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
                    <PostList recipe={recipe.id}/>
                </div>

            </div>
        )
    }
};

export default RecipePage;