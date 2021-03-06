import React from 'react'
import CardList from "./cardList"
import AuthorInfo from "./authorInfo"
import UserProfile from "./authentication/userProfile"
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        let current_user_id = UserProfile.getName();
        this.fetchRecipes = this.fetchRecipes.bind(this);
        this.fetchPosts = this.fetchPosts.bind(this);
        this.fetchCollections = this.fetchCollections.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        let userID = this.props.match.params.id;
        this.state = {
            posts: [],
            recipes: [],
            collections: [],
            user: {},
            user_id: current_user_id,
            profile_id: this.props.match.params.id
        };
        this.fetchRecipes(userID);
        this.fetchPosts(userID);
        this.fetchCollections(userID);
        this.fetchUser(userID);
        console.log(userID, current_user_id)
    }

    fetchRecipes(id) {
        let realURL = 'https://cook-me.herokuapp.com/users/' + id + '/recipes';
        fetch(realURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    recipes: data
                }, () => console.log(this.state))
            })
            .catch(console.log)
    }

    fetchPosts(id) {
        let realURL = 'https://cook-me.herokuapp.com/users/' + id + "/posts";
        fetch(realURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    posts: data
                }, () => console.log(this.state))
            })
            .catch(console.log)
    }

    fetchCollections(id) {
        //let fakeURL = 'https://5e7ce6e0a917d700166840b4.mockapi.io/postsByRecipe/'+recipeId
        let realURL = "https://cook-me.herokuapp.com/users/" + id + "/collections";
        fetch(realURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    collections: data
                }, () => console.log(this.state))
            })
            .catch(console.log)
    }

    fetchUser(id) {
        let realURL = 'https://cook-me.herokuapp.com/users/' + id
        fetch(realURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    user: data
                })
            })
            .catch(console.log)
    }

    handleClick() {
        window.open("/equipment/");
    }

    render() {
        console.log(this.state.user_id, this.state.profile_id)
        console.log(this.state.user_id === this.state.profile_id)
        console.log(this.state.user_id === this.state.profile_id)

        return (

            <div class = "row" >
            <div class = "col-lg-3 h-100 bg-black" >
            <div class = "row" >
            <AuthorInfo author = {
                this.state.user
            }
            description = "" / >
            </div>
            <div class = "row justify-content-center flex-column" > { //Check if message failed
                (this.state.user_id === this.state.profile_id) ?
                < button class = "btn btn-primary" onClick = {this.handleClick} > Update Equipment < /button> :
                    < > < />
            } </div>

            </div> <
            div class = "col-lg-9 h-100 d-flex flex-column" >
            <div className = "row mx-3 my-3 mh-3" >
            < p > Recipes < /p>
            < CardList type = "recipes" className="" items = {this.state.recipes.slice(0, 5)}/>
             < /div> <
            div className = "row mx-3 my-3 mh-3" >
            < p > Posts < /p>
            < CardList type = "posts"
            items = {this.state.posts.slice(0, 5)} />
            </div>
            <div className = "row mx-3 my-5 mh-3 " >
            <p > Collections < /p>
            <CardList type = "collections" items = { this.state.collections.slice(0, 5)}/>
            </div>
            </div>
            </div>
        );
    }
}

export default ProfilePage
