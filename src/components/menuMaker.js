import React from 'react'
import UserProfile from "./userProfile"
import DragList from "./dragList";
import DropList from "./dropList";

class MenuMaker extends React.Component {
    constructor(props) {
        super(props);
        let current_user_id = UserProfile.getName();
        this.handleChange=this.handleChange.bind(this);
        this.calorieCounter = this.calorieCounter.bind(this);
        this.getAllCalories = this.getAllCalories.bind(this);
        this.state = {
            meals:{
                1:[],
                2:[],
                3:[]
            },
            calories:{
                "1":0,
                "2":0,
                "3":0
            }

        };
    }

    handleChange(number, items)
    {
        let meals = this.state.meals;
        meals[number] = items;
        this.setState({ "meals":meals}, ()=>{this.props.handler(this.props.day, this.state.meals)});
    }

    getAllCalories()
    {
        let result = 0;
        result+=parseInt(this.state["calories"]["1"]);
        result+=parseInt(this.state["calories"]["2"]);
        result+=parseInt(this.state["calories"]["3"]);

        return result;

    }

    calorieCounter(meal, calories)
    {
        let currentCalories = this.state.calories
        currentCalories[meal] = calories
        this.setState({ "calories": currentCalories});
    }



    render()
    {
        return (
            <>


                    <div className="d-flex flex-column" style={{ height: "100%", padding: "20px" }}>
                        <div className="row"  style={{ height: "50%" }}>
                            <DropList name="Breakfast" mealNumber="1" handler={this.handleChange} calorieCounter={this.calorieCounter} />
                        </div>
                        <div className="row" style={{ height: "50%" }}>
                            <DropList name="Lunch" mealNumber="2" handler={this.handleChange} calorieCounter={this.calorieCounter}/>
                        </div>
                        <div className="row" style={{ height: "50%" }}>
                            <DropList name="Dinner" mealNumber="3" handler={this.handleChange} calorieCounter={this.calorieCounter}/>
                        </div>
                        <div className="row" style={{ height: "50%" }}>
                            <p className="float-right">{this.getAllCalories()} calories total</p>
                        </div>
                    </div>

            </>
        );
    }


}

export default MenuMaker
