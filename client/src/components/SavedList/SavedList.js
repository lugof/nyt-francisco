import React from "react";
import { Card, Container } from "react-bootstrap";
import SavedBook from "../SavedBook/SavedBook";

function SavedList(props) {
    return (
        <Container>
            <Card>
                <Card.Header className="h5"><b>YOUR SAVED BOOKS:</b></Card.Header>
                <Card.Body>
                    {props.books.map((book) => {
                        return <SavedBook reloadBooks={props.reloadBooks} key={book._id} id={book._id} title={book.title} authors={book.authors} description={book.description} image={book.image} link={book.link} />
                    })}
                </Card.Body>
            </Card>
        </Container>
    )
}
export default SavedList;