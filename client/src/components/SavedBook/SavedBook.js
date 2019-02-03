import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../../utils/api"


class SavedBook extends Component {
    state={
        deleted:""
    }

    componentWillUnmount=(id)=>{
        this.setState({ deleted: id });
        console.log(this.state)
    }


    delete = () => {
        console.log(this.props.id)
        API.deleteBook(this.props.id)
            .then(() =>  this.componentWillUnmount(this.props.id)
               
            )
    }


 


    render() {
        return (
            <div>
                <Card>
                    <Card.Header className="h5"><i>{this.props.title}</i></Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col-2">
                                <Card.Img className="bookImg" src={this.props.image} />
                            </div>
                            <div className="col-1">
                            </div>
                            <div className="col-8 bookDetails">
                                <Card.Title>{this.props.authors}</Card.Title>
                                <Card.Text>
                                    {this.props.description}
                                </Card.Text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12  text-center">
                                <a variant="primary" href={this.props.link} target="_blank" rel="noopener noreferrer">View <i className="fas fa-external-link-alt"></i></a>
                                <Button className="btn-delete" variant="danger" onClick={this.delete.bind(this)}>Delete</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br />
            </div>
        )
    }
}

export default SavedBook;