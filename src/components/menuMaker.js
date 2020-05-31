import React from 'react'
import UserProfile from "./userProfile"
import DragList from "./dragList";
import DropList from "./dropList";

class MenuMaker extends React.Component {
    constructor(props) {
        super(props);
        let current_user_id = UserProfile.getName();
        this.handleChange=this.handleChange.bind(this);
        this.getAllCalories = this.getAllCalories.bind(this);
        this.state = {
            1:[],
            2:[],
            3:[]
        };
    }

    handleChange(number, items)
    {
        this.setState({ [number]:items}, ()=>{this.props.handler(this.props.day, this.state)});
    }

    getAllCalories()
    {
        let result = 0;
        this.state["1"].forEach((item) => {
            result+=item.nutrientInfo.Calories;
        });
        this.state["2"].forEach((item) => {
            result+=item.nutrientInfo.Calories;
        });
        this.state["3"].forEach((item) => {
            result+=item.nutrientInfo.Calories;
        });

        return result;

    }



    render()
    {
        return (
            <>
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                        <DragList items={this.props.recipes}/>
                    </div>
                    <div className="col-6 d-flex flex-column" style={{ height: "100%", padding: "20px" }}>
                        <div className="row"  style={{ height: "50%" }}>
                            <DropList name="Breakfast" mealNumber="1" handler={this.handleChange} />
                        </div>
                        <div className="row" style={{ height: "50%" }}>
                            <DropList name="Lunch" mealNumber="2" handler={this.handleChange}/>
                        </div>
                        <div className="row" style={{ height: "50%" }}>
                            <DropList name="Dinner" mealNumber="3" handler={this.handleChange}/>
                        </div>
                        <div className="row" style={{ height: "50%" }}>
                            <p className="float-right">{this.getAllCalories()} calories total</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }


}

export default MenuMaker
