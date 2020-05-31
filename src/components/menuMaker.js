import React from 'react'
import CardList from "./cardList"
import AuthorInfo from "./authorInfo"
import UserProfile from "./userProfile"
import DragList from "./dragList";
import DropList from "./dropList";

class MenuMaker extends React.Component {
    constructor(props) {
        super(props);
        let current_user_id = UserProfile.getName();
        this.fetchRecipes = this.fetchRecipes.bind(this);
        this.state = {
            recipes: [],
            user_id: current_user_id
        };
        this.fetchRecipes(this.state.user_id);
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

    render()
    {
        if(this.state.recipes === [])
        {
            console.log("still null");
            return;
        }
        return (
            <div className="container-fluid" style={{ height: "100vh" }}>
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                        <DragList items={this.state.recipes}/>
                    </div>
                    <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                        <DropList />
                    </div>
                </div>
            </div>
        );
    }


}

export default MenuMaker
