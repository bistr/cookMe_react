import React from 'react'
import UserProfile from "./userProfile"
import DragList from "./dragList";
import DropList from "./dropList";
import MenuMaker from "./menuMaker"
import NutritionalInfo from "./recipes/nutritionalInfo"


class MenuViewer extends React.Component {
    constructor(props) {
        super(props);
        let current_user_id = UserProfile.getName();
        this.handleChange = this.handleChange.bind(this);
        this.dayChangeHandler = this.dayChangeHandler.bind(this);
        this.fetchMenu = this.fetchMenu.bind(this);
        this.getAllNutrientInfo = this.getAllNutrientInfo.bind(this);
        this.state = {
            recipes: [],
            user_id: current_user_id,
            days:{},
            menu:null,
            menu_id:this.props.match.params.id,
            nutrientInfo:{}
        };
        this.fetchMenu(this.state.menu_id);
    }


    fetchMenu(id)
    {
        let realURL = 'https://cook-me.herokuapp.com/menus/' + id;
        fetch(realURL)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    menu: data
                }, () => console.log(this.state))
            })
            .then(()=>{
                this.setState({"nutrientInfo":this.getAllNutrientInfo("1")})
            })
            .catch(console.log)
    }

    hideAll()
    {
        for (let day = 1; day<8; day++)
        {
            document.getElementById("menumaker"+day).style.display = 'none';
        }
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
        this.setState({"nutrientInfo":this.getAllNutrientInfo(day)})
    }

    handleChange(day, item)
    {
    }


    getAllNutrientInfo(day)
    {
        let result = {"Sugar":0, "Salt":0, "Fat":0, "Calories":0, "Protein":0};
        if(!this.state.menu.recipes)
        {
            return result;
        }
        if(!this.state.menu.recipes[day])
        {
            return result;
        }
        ["1","2","3"].forEach((meal) => {
            if(!this.state.menu.recipes[day][meal])
            {
                return;
            }
            this.state.menu.recipes[day][meal].forEach((recipe) => {
                result["Sugar"]+=recipe.nutrientInfo["Sugar"]
                result["Salt"]+=recipe.nutrientInfo["Salt"]
                result["Protein"]+=recipe.nutrientInfo["Protein"]
                result["Fat"]+=recipe.nutrientInfo["Fat"]
                result["Calories"]+=recipe.nutrientInfo["Calories"]
            });
        });
        return result;


    }



    render()
    {

        if(this.state.menu == null)
        {
            console.log("still null");
            return null;
        }
        return (
            <>
            <div className="row">
            <div className="col-1">
            <div className="d-flex flex-column" role="group">
                <button type="button" id="1" className="btn btn-outline-primary my-1" onClick={this.dayChangeHandler}>1</button>
                <button type="button" id="2" className="btn btn-outline-primary my-1" onClick={this.dayChangeHandler}>2</button>
                <button type="button" id="3" className="btn btn-outline-primary my-1" onClick={this.dayChangeHandler}>3</button>
                <button type="button" id="4" className="btn btn-outline-primary my-1" onClick={this.dayChangeHandler}>4</button>
                <button type="button" id="5" className="btn btn-outline-primary my-1" onClick={this.dayChangeHandler}>5</button>
                <button type="button" id="6" className="btn btn-outline-primary my-1" onClick={this.dayChangeHandler}>6</button>
                <button type="button" id="7" className="btn btn-outline-primary my-1" onClick={this.dayChangeHandler}>7</button>

            </div>

            </div>
            <div className="col-8" id="menumaker1">
                <MenuMaker day="1" recipes={this.state.menu.recipes["1"]} handler={this.handleChange}/>
            </div>
            <div className="col-8"  id="menumaker2">
                <MenuMaker day="2" recipes={this.state.menu.recipes["2"]} handler={this.handleChange}/>
            </div>
            <div className="col-8" id="menumaker3">
                <MenuMaker day="3" recipes={this.state.menu.recipes["3"]} handler={this.handleChange}/>
            </div>
            <div className="col-8" id="menumaker4">
                <MenuMaker day="4" recipes={this.state.menu.recipes["4"]} handler={this.handleChange}/>
            </div>
            <div className="col-8" id="menumaker5">
                <MenuMaker day="5" recipes={this.state.menu.recipes["5"]} handler={this.handleChange}/>
            </div>
            <div className="col-8" id="menumaker6">
                <MenuMaker day="6" recipes={this.state.menu.recipes["6"]} handler={this.handleChange}/>
            </div>
            <div className="col-8" id="menumaker7">
                <MenuMaker day="7" recipes={this.state.menu.recipes["7"]} handler={this.handleChange}/>
            </div>
            <div className="col-3 float-right">
            <NutritionalInfo info={this.state.nutrientInfo}/>
            </div>
            </div>

            </>
        );
    }


}

export default MenuViewer
