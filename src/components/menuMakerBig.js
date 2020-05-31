import React from 'react'
import UserProfile from "./userProfile"
import DragList from "./dragList";
import DropList from "./dropList";
import MenuMaker from "./menuMaker"


class MenuMakerBig extends React.Component {
    constructor(props) {
        super(props);
        let current_user_id = UserProfile.getName();
        this.fetchRecipes = this.fetchRecipes.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.dayChangeHandler = this.dayChangeHandler.bind(this);
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

    hideAll()
    {
        for (let day = 1; day<8; day++)
        {
            document.getElementById("menumaker"+day).style.display = 'none';
        }
        console.log("hidden")
    }

    dayChangeHandler(event)
    {
        this.hideAll();
        let day = event.target.id;
        let current = document.getElementById("menumaker"+day).style.display;
        if (current == "none")
        {
            document.getElementById("menumaker"+day).style.display = 'block';
        }
        else {
            document.getElementById("menumaker"+day).style.display = 'none';
        }
    }

    handleChange(day, item)
    {
        this.setState({ [day]: item}, ()=>{console.log(this.state)});
    }

    render()
    {

        if(this.state.recipes.length == 0)
        {
            console.log("still null");
            return null;
        }
        return (
            <>
            <div className="row">
            <div className="col-1">
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
                <button type="button" id="1" className="btn btn-secondary" onClick={this.dayChangeHandler}>1</button>
                <button type="button" id="2" className="btn btn-secondary" onClick={this.dayChangeHandler}>2</button>
                <button type="button" id="3" className="btn btn-secondary" onClick={this.dayChangeHandler}>3</button>
                <button type="button" id="4" className="btn btn-secondary" onClick={this.dayChangeHandler}>4</button>
                <button type="button" id="5" className="btn btn-secondary" onClick={this.dayChangeHandler}>5</button>
                <button type="button" id="6" className="btn btn-secondary" onClick={this.dayChangeHandler}>6</button>
                <button type="button" id="7" className="btn btn-secondary" onClick={this.dayChangeHandler}>7</button>
            </div>
            </div>

            <div className="col-11" id="menumaker1">
                <MenuMaker day="1" recipes={this.state.recipes} handler={this.handleChange}/>
            </div>
            <div className="col-11" id="menumaker2">
                <MenuMaker day="2" recipes={this.state.recipes} handler={this.handleChange}/>
            </div>
            <div className="col-11" id="menumaker3">
                <MenuMaker day="3" recipes={this.state.recipes} handler={this.handleChange}/>
            </div>
            <div className="col-11" id="menumaker4">
                <MenuMaker day="4" recipes={this.state.recipes} handler={this.handleChange}/>
            </div>
            <div className="col-11" id="menumaker5">
                <MenuMaker day="5" recipes={this.state.recipes} handler={this.handleChange}/>
            </div>
            <div className="col-11" id="menumaker6">
                <MenuMaker day="6" recipes={this.state.recipes} handler={this.handleChange}/>
            </div>
            <div className="col-11" id="menumaker7">
                <MenuMaker day="7" recipes={this.state.recipes} handler={this.handleChange}/>
            </div>
            </div>
            </>
        );
    }


}

export default MenuMakerBig
