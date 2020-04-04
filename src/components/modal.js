import React from "react";
import "../componentsStyle/modal.css"
import PostForm from "./posts/postForm"
import AddForm from "./collections/addForm"
import CloseButton from "./closeButton"

class Modal extends React.Component {

  render() {
    if (this.props.show != true)
    {
        return null;
    }
    console.log("calling render of modal")
    let modal = null;
    console.log(this.props.type);

    if (this.props.type === "postModal")
    {
        modal=<PostForm id={this.props.id}/>;
    }
    else if(this.props.type === "addModal")
    {
        modal=<AddForm recipe_id={this.props.id} close={this.props.handler} collections={this.props.collections}/>;
    }

    return (
        <div className="modal modal-container d-flex align-items-center justify-content-center align-items-center align-self-center">
            <form class="text-center p-4 border border-dark rounded border-dark-5 bg-white" action="#!">
                <CloseButton handler={this.props.handler} name={this.props.type} className="float-right"/>
                {modal}
            </form>
        </div>
    );
  }
}

export default Modal
