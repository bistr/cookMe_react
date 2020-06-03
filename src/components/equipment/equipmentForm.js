import React from 'react'
import EquipmentCard from "./equipmentCard"
import UserProfile from "../authentication/userProfile"
import Utilities from "../generic/utilities"

class EquipmentForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            tools:{"grater":0, "grill":0, "microwave":0,"mixer":0,"pan":0,"pot":0,"stove":0,"toaster":0},
            user_id:UserProfile.getName()
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.fetchEquipment = this.fetchEquipment.bind(this);
        this.colorOwnedEquipment = this.colorOwnedEquipment.bind(this)

        this.fetchEquipment(this.state.user_id);
    }

    fetchEquipment(id)
    {
        let realURL = 'https://cook-me.herokuapp.com/get-user-equipment/'+id;
        Utilities.sendRequestGet(realURL)
        .then((data) => {

            if (Object.keys(data)!==0)
            {
                this.setState({ tools: data}, ()=>console.log(this.state))
            }
            return;

        })
        .then(()=>{this.colorOwnedEquipment()})

    }

    colorOwnedEquipment()
    {
        console.log(this.state)
        const tools = ["grater", "grill", "microwave","mixer","pan","pot","stove","toaster"];
        tools.forEach((tool)=>{
            if (this.state.tools[tool] === 1 || this.state.tools[tool] === true)
            {
                document.getElementById(tool).classList.toggle("pressed");
            }
        });
    }

    handleClick(tool, event)
    {
        let newTools = this.state.tools;
        newTools[tool] = !newTools[tool];
        this.setState({"tools":newTools},()=>console.log(this.state));
        document.getElementById(tool).classList.toggle("pressed");
    }


    handleSubmit(event)
    {
        event.preventDefault();
        //TODO FIXME
        Utilities.sendRequestPost('https://cook-me.herokuapp.com/update-equipment/'+this.state.user_id, this.state)
        .then(()=>{window.open("/profile/"+this.state.user_id)})
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    render()
    {
        const tools = ["grater", "grill", "microwave","mixer","pan","pot","stove","toaster"];
        return(
            <>
            <div class="row my justify-content-center">
                <p className="display-4 my-3">What kinds of kitchenware do you own?</p>
            </div>
            <div class="row my-3 justify-content-center">
                <div className="card-deck mx-5 ">
                  {tools.map((tool) => (
                      <EquipmentCard name={tool} handler={this.handleClick}/>
                  ))}
                </div>
            </div>
            <div class="row justify-content-center">
                <button className="btn btn-primary m-4" onClick={this.handleSubmit} >Update kitchenware</button>
            </div>
        </>
        )
    }
 }

export default EquipmentForm;
