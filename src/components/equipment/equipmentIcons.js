import React from 'react'
import EquipmentCard from "./equipmentCard"
import UserProfile from "../authentication/userProfile"

class EquipmentIcons extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.state =
        {
            tools:{"grater":0, "grill":0, "microwave":0,"mixer":0,"pan":0,"pot":0,"stove":0,"toaster":0},
            user_id:UserProfile.getName()
        };
        this.fetchEquipment = this.fetchEquipment.bind(this);
        this.colorOwnedEquipment = this.colorOwnedEquipment.bind(this)
        if(this.props.preloaded === "true")
        {
            this.fetchEquipment(this.state.user_id);
        }



    }

    componentDidMount()
    {
        if("equipment" in this.props)
        {
            const tools = ["grater", "grill", "microwave","mixer","pan","pot","stove","toaster"];
            tools.forEach((tool)=>{
                if (this.props.equipment[tool] === 1)
                {
                    document.getElementById(tool).classList.toggle("pressed");
                }
            });
        }
    }

    fetchEquipment(id)
    {
        let realURL = 'https://cook-me.herokuapp.com/get-user-equipment/'+this.state.user_id;
        fetch(realURL)
        .then(res => res.json())
        .then((data) => {
          this.setState({ tools: data}, ()=>console.log(this.state))
        })
        .then(()=>{this.colorOwnedEquipment()})
        .catch(console.log)
    }

    colorOwnedEquipment()
    {
        const tools = ["grater", "grill", "microwave","mixer","pan","pot","stove","toaster"];
        tools.forEach((tool)=>{
            if (this.state.tools[tool] === 1)
            {
                document.getElementById(tool).classList.toggle("pressed");
            }
        });
    }

    handleCardClick(tool)
    {
        if("equipment" in this.props)
        {
            return;
        }
        let newTools = this.state.tools;
        newTools[tool] = !newTools[tool];
        this.setState({"tools":newTools},()=>console.log(this.state));
        document.getElementById(tool).classList.toggle("pressed");
        this.props.handler(this.props.name,this.state.tools);
    }


    render()
    {
        const tools = ["grater", "grill", "microwave","mixer","pan","pot","stove","toaster"];
        return(
            <div className="d-flex justify-content-center">
                  {tools.map((tool) => (
                      <EquipmentCard name={tool} handler={this.handleCardClick}/>
                  ))}
        </div>
        )
    }
 }

export default EquipmentIcons;
