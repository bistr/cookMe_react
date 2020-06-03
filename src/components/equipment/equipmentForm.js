import React from 'react'
import EquipmentCard from "./equipmentCard"
import UserProfile from "../authentication/userProfile"

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
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
            if (Object.keys(data)!=0)
            {
                console.log(data.length);
                this.setState({ tools: data}, ()=>console.log(this.state))
            }

        })
        .then(()=>{this.colorOwnedEquipment()})
        .catch(console.log)
    }

    colorOwnedEquipment()
    {
        const tools = ["grater", "grill", "microwave","mixer","pan","pot","stove","toaster"];
        tools.map((tool)=>{
            if (this.state.tools[tool] == 1)
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
        fetch('https://cook-me.herokuapp.com/update-equipment/'+this.state.user_id, {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        })
        .then((response) => response.json())
        .then(()=>{const win = window.open("/profile/"+this.state.user_id);})
        //go to profile page or something
        // .then((data) => {
        //   this.openRecipePage(data.id);
        // })
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
