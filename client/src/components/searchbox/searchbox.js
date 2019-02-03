import React from "react";
import { Jumbotron, Form, FormControl, Button, Container } from 'react-bootstrap';

function SearchBox(props) {
    return (
        <Container>
        <Jumbotron>
            <Form inline>
                <FormControl  onChange={props.handleSearchChange} value={props.textSearch} type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick= { ()=>props.handleSearchClick() } variant="outline-primary">Search</Button>
            </Form>
        </Jumbotron>
        </Container>
    )
}

export default SearchBox;