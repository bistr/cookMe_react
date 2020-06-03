import React from 'react'
import UserProfile from "./authentication/userProfile"
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class Navigation extends React.Component
{

    constructor(props)
    {
        super(props);
        this.logOutHandler = this.logOutHandler.bind(this);
        this.state = {"user_id":UserProfile.getName()}
    }

    logOutHandler()
    {
        UserProfile.setName("");
        this.setState({"user_id":UserProfile.getName()})
    }

    render()
    {
        console.log(UserProfile.getName())
        let str = `/profile/${UserProfile.getName()}`;
        return(
            <div className="fixed-top bg-white">
              <ul className="nav nav-pills mb-3 d-block">
                <li className = "nav-item">
                  <Link to="/" className="nav-link float-left">Home</Link>
                </li>
                <li className = "nav-item">
                  <Link to="/search" className="nav-link float-left">Search</Link>
                </li>
                {
                    (this.state.user_id==="")?
                    <>
                    <li className = "nav-item float-right"><Link to="/register" className="nav-link">Register</Link></li>
                    <li className = "nav-item float-right"><Link to="/login" className="nav-link">Log In</Link></li>
                    </>:
                    <>
                    <button className = "nav-item float-right btn btn-secondary" onClick={this.logOutHandler}>Log out</button>
                    </>
                }
                {
                    (this.state.user_id!=="")?
                    <>
                    <li className = "nav-item">
                      <Link to="/upload" className="nav-link float-left">Upload Recipe</Link>
                    </li>
                    <li className = "nav-item">
                      <Link to="/create-menu" className="nav-link float-left">Create Menu</Link>
                    </li>

                <li className = "nav-item float-right">
                     <Link to={str} className="nav-link"><svg className="bi bi-people-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
                      <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                      <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd"/>
                    </svg></Link>
                </li>
                </>:
                <></>
            }



              </ul>
              </div>
        )
    }
}

export default Navigation;
