import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import RecipePage from "./components/recipes/recipePage"
import RegisterForm from "./components/registerForm"
import LoginForm from "./components/loginForm"
// import UploadForm from "./components/recipes/uploadForm"
import PostPage from "./components/posts/postPage"
import PostForm from "./components/posts/postForm"
import ProfilePage from "./components/profilePage"
import Navigation from "./components/navigation"
import CollectionPage from "./components/collections/collectionPage"
import EquipmentForm from "./components/equipment/equipmentForm"
import MenuDisplayer from "./components/menuDisplayer"
import MenuEditor from "./components/menuEditor"
import MenuCreator from "./components/menuCreator"
import Search from "./components/search"
import UploadForm from "./components/uploadForm"
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Navigation />
      <div className="mt-5">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipe/:id" component={RecipePage} />
        <Route path = "/search" component = {Search} />
        <Route path = "/register" component = {RegisterForm} />
        <Route path = "/login" component = {LoginForm} />
        <Route path = "/upload" component = {UploadForm} />
        <Route path = "/posts/:id" component = {PostPage} />
        <Route path = "/publishPost/:id" component = {PostForm} />
        <Route path = "/profile/:id" component = {ProfilePage} />
        <Route path = "/collections/:id" component = {CollectionPage} />
        <Route path = "/equipment/" component = {EquipmentForm} />
        <Route path = "/menumaker/:id" component = {MenuEditor} />
        <Route path = "/menuviewer/:id" component = {MenuDisplayer} />
        <Route path = "/create-menu" component = {MenuCreator} />
        <Route path = "/test" component = {<></>} />
      </Switch>
      </div>

  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
