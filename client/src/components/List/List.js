import React from "react";
import { Card, Container } from "react-bootstrap";
import Book from "../Book/Book";

function List(props) {
    return (
        <Container>
        <Card>
            <Card.Header as="h5">Your results:</Card.Header>
            <Card.Body>
                {props.books.map((book)=>{
                    return <Book key={book.id} title={book.volumeInfo.title}  authors={book.volumeInfo.authors} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.smallThumbnail} link={book.volumeInfo.infoLink}/>
                            
               })}

            </Card.Body>
        </Card>
        </Container>
   )
}
export default List;


