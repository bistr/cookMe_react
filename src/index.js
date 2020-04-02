import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import RecipePage from "./components/recipes/recipePage"
import SearchForm from "./components/searchForm"
import RegisterForm from "./components/registerForm"
import LoginForm from "./components/loginForm"
import UploadForm from "./components/recipes/uploadForm"
import PostPage from "./components/posts/postPage"
import PostForm from "./components/posts/postForm"
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div className="fixed-top">
      <ul className="nav nav-pills mb-3 d-block">
        <li className = "nav-item">
          <Link to="/index" className="nav-link float-left">Home</Link>
        </li>
        <li className = "nav-item">
          <Link to="/search" className="nav-link float-left">Search</Link>
        </li>
        <li className = "nav-item">
          <Link to="/upload" className="nav-link float-left">Upload Recipe</Link>
        </li>
        <li className = "nav-item float-right">
             <Link to="/login" className="nav-link"><svg className="bi bi-people-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
              <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd"/>
            </svg></Link>
        </li>
        <li className = "nav-item float-right">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className = "nav-item float-right">
          <Link to="/login" className="nav-link">Log In</Link>
        </li>

      </ul>
      <Switch>
        <Route exact path="/index" component={App} />
        <Route path="/recipe/:id" component={RecipePage} />
        <Route path = "/search" component = {SearchForm} />
        <Route path = "/register" component = {RegisterForm} />
        <Route path = "/login" component = {LoginForm} />
        <Route path = "/upload" component = {UploadForm} />
        <Route path = "/posts/:id" component = {PostPage} />
        <Route path = "/publishPost/:id" component = {PostForm} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
