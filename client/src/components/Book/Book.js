import React, {Component} from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./style.css";
import api from "../../utils/api";

class Book extends Component  {
   
    save= () => {  
        api.saveBook({
            title: this.props.title,
            authors: this.props.authors,
            description: this.props.description,
            image: this.props.image,
            link: this.props.link,
        }).then( results => {console.log(results) })
     }
  


    render(){
return (
        <div>
        <Card>
            <Card.Header className="h5"><i>{this.props.title} </i></Card.Header>
            <Card.Body>
            <div className="row">
            <div className="col-2">
                <Card.Img className="bookImg" src={this.props.image}/>
                </div>
                <div className="col-1">
                </div>
                <div className="col-9 bookDetails">
                <Card.Title>{this.props.authors}</Card.Title>
                <Card.Text>
                    {this.props.description}
                </Card.Text>
                </div>
                </div>
                <div className="row">
                <div className="col-12  text-center">
                <a variant="primary" href={this.props.link} target="_blank" rel="noopener noreferrer">View <i className="fas fa-external-link-alt"></i></a>
                <Button variant="secondary" onClick= {this.save}>Save</Button>
                </div>
                </div>
            </Card.Body>
        </Card>
        </div>
)
    }
}
export default Book;