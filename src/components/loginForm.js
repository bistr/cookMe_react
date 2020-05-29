import React from 'react'
import EquipmentCard from "./equipmentCard"

class LoginForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            tools:{"grater":0, "grill":0, "microwave":0,"mixer":0,"pan":0,"pot":0,"stove":0,"toaster":0}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleArrayChange = this.handleArrayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event)
    {
    }

    handleClick(tool, event)
    {
        let newTools = this.state.tools;
        newTools[tool] = !newTools[tool];
        this.setState({"tools":newTools},()=>console.log(this.state));
        document.getElementById(tool).classList.toggle("pressed");
    }

    handleArrayChange(event)
    {
    }

    handleSubmit(event)
    {
        event.preventDefault();
        //TODO FIXME
        fetch('https://cook-me.herokuapp.com/update-equipment/1', {
          method: 'POST',// or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        })
        .then((response) => response.json())
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

export default LoginForm;
