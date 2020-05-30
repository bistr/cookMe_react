import React from 'react'
import UserProfile from "../userProfile"
import "../../componentsStyle/cardStyle.css"

class RatingIcons extends React.Component
{
    constructor(props)
    {
        super(props);
        this.hoverHandler = this.hoverHandler.bind(this);
        this.leaveHandler = this.leaveHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {"selected":0};
        // this.handleCardClick = this.handleCardClick.bind(this);
        // this.state =
        // {
        //     tools:{"grater":0, "grill":0, "microwave":0,"mixer":0,"pan":0,"pot":0,"stove":0,"toaster":0},
        //     user_id:UserProfile.getName()
        // };
        // this.fetchEquipment = this.fetchEquipment.bind(this);
        // this.colorOwnedEquipment = this.colorOwnedEquipment.bind(this)
        // if(this.props.preloaded === "true")
        // {
        //     this.fetchEquipment(this.state.user_id);
        // }


    }

    // fetchEquipment(id)
    // {
    //     let realURL = 'https://cook-me.herokuapp.com/get-user-equipment/'+this.state.user_id;
    //     fetch(realURL)
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ tools: data}, ()=>console.log(this.state))
    //     })
    //     .then(()=>{this.colorOwnedEquipment()})
    //     .catch(console.log)
    // }
    //
    // colorOwnedEquipment()
    // {
    //     const tools = ["grater", "grill", "microwave","mixer","pan","pot","stove","toaster"];
    //     tools.map((tool)=>{
    //         if (this.state.tools[tool] == 1)
    //         {
    //             document.getElementById(tool).classList.toggle("pressed");
    //         }
    //     });
    // }
    //
    // handleCardClick(tool)
    // {
    //     let newTools = this.state.tools;
    //     newTools[tool] = !newTools[tool];
    //     this.setState({"tools":newTools},()=>console.log(this.state));
    //     document.getElementById(tool).classList.toggle("pressed");
    //     this.props.handler(this.props.name,this.state.tools);


    // }

    displayInfo()
    {
        let secondURL= `${process.env.PUBLIC_URL}/images/${this.props.name}Color.png`;
        let i = 1;
        for (i=1; i<=this.props.info; i++)
        {
            // document.getElementById(this.props.name+i).classList.add("pressed")
            document.getElementById(this.props.name+i).setAttribute("src",secondURL)
        }
    }

    hoverHandler(event)
    {
        let currentID = event.target.id;
        let secondURL= `${process.env.PUBLIC_URL}/images/${this.props.name}Color.png`;
        currentID = currentID[currentID.length-1]
        currentID = parseInt(currentID)
        let i = 1;
        for (i=1; i<=currentID; i++)
        {
            // document.getElementById(this.props.name+i).classList.add("pressed")
            document.getElementById(this.props.name+i).setAttribute("src",secondURL)
        }
    }


    leaveHandler(event)
    {
        let firstURL=`${process.env.PUBLIC_URL}/images/${this.props.name}.png`;
        let i = 1;
        for (i=this.state.selected+1; i<=3; i++)
        {
            document.getElementById(this.props.name+i).classList.remove("pressed")
            document.getElementById(this.props.name+i).setAttribute("src",firstURL)
        }
    }

    clickHandler(event)
    {
        let currentID = event.target.id;
        let secondURL= `${process.env.PUBLIC_URL}/images/${this.props.name}Color.png`;
        currentID = currentID[currentID.length-1]
        currentID = parseInt(currentID)
        let i = 1;
        for (i=1; i<=currentID; i++)
        {
            // document.getElementById(this.props.name+i).classList.add("pressed")
            document.getElementById(this.props.name+i).setAttribute("src",secondURL)
        }
        this.setState({"selected":currentID});
        this.props.handler(this.props.name, currentID);
    }

    render()
    {
        let nums=[1,2,3];
        if ("info" in this.props)
        {
            let imgSource = `${process.env.PUBLIC_URL}/images/${this.props.name}.png`;
            let secondImgSource = `${process.env.PUBLIC_URL}/images/${this.props.name}Color.png`;
            return(
                <>
                <label class="text-capitalize text-dark mx-4 w-60 rating-text">{this.props.name}</label>
                <img className="rating-icon" src={(this.props.info<1)?imgSource:secondImgSource} id={this.props.name+"1"}/>
                <img className="rating-icon" src={(this.props.info<2)?imgSource:secondImgSource} id={this.props.name+"2"}/>
                <img className="rating-icon" src={(this.props.info<3)?imgSource:secondImgSource} id={this.props.name+"3"}/>
                </>
            )

        }
        // const tools = ["grater", "grill", "microwave","mixer","pan","pot","stove","toaster"];
        // return(
        //     <>
        //     <div class="row my-3 justify-content-center">
        //         <div className="card-deck mx-5 ">
        //           {tools.map((tool) => (
        //               <EquipmentCard name={tool} handler={this.handleCardClick}/>
        //           ))}
        //         </div>
        //     </div>
        // </>
        // )

        let imgSource = `${process.env.PUBLIC_URL}/images/${this.props.name}.png`;

        return(
            <>
            <h4 class="text-capitalize text-dark mx-4 w-60 rating-text">{this.props.name}</h4>
            <img className="rating-icon" onMouseOver={this.hoverHandler} onClick={this.clickHandler} onMouseLeave={this.leaveHandler} src={imgSource} id={this.props.name+"1"}/>
            <img className="rating-icon" onMouseOver={this.hoverHandler} onClick={this.clickHandler} onMouseLeave={this.leaveHandler} src={imgSource} id={this.props.name+"2"}/>
            <img className="rating-icon" onMouseOver={this.hoverHandler} onClick={this.clickHandler} onMouseLeave={this.leaveHandler} src={imgSource} id={this.props.name+"3"}/>
            </>
        )
    }
 }

export default RatingIcons;
