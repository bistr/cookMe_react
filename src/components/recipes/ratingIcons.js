import React from 'react'
import UserProfile from "../authentication/userProfile"
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
    }

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
        if ("info" in this.props)
        {
            let imgSource = `${process.env.PUBLIC_URL}/images/${this.props.name}.png`;
            let secondImgSource = `${process.env.PUBLIC_URL}/images/${this.props.name}Color.png`;
            return(
                <div class="row w-100 justify-content-center my-1">
                <label class="text-capitalize text-dark mx-4 w-60 rating-text">{this.props.name}</label>
                <img className="rating-icon m-1" src={(this.props.info<1)?imgSource:secondImgSource} alt="rating1" id={this.props.name+"1"}/>
                <img className="rating-icon m-1" src={(this.props.info<2)?imgSource:secondImgSource} alt="rating2" id={this.props.name+"2"}/>
                <img className="rating-icon m-1" src={(this.props.info<3)?imgSource:secondImgSource} alt="rating3" id={this.props.name+"3"}/>
                </div>
            )

        }

        let imgSource = `${process.env.PUBLIC_URL}/images/${this.props.name}.png`;

        return(
            <div class="row w-100 justify-content-center my-1">
            <label class="text-capitalize text-dark mx-4 w-60 rating-text">{this.props.name}</label>
            <img className="rating-icon" onMouseOver={this.hoverHandler} onClick={this.clickHandler} alt="rating1" onMouseLeave={this.leaveHandler} src={imgSource} id={this.props.name+"1"}/>
            <img className="rating-icon" onMouseOver={this.hoverHandler} onClick={this.clickHandler} alt="rating2" onMouseLeave={this.leaveHandler} src={imgSource} id={this.props.name+"2"}/>
            <img className="rating-icon" onMouseOver={this.hoverHandler} onClick={this.clickHandler} alt="rating3" onMouseLeave={this.leaveHandler} src={imgSource} id={this.props.name+"3"}/>
            </div>
        )
    }
 }

export default RatingIcons;
