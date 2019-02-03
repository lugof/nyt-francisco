import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

function HeaderSaved(props) {
    return (
        <Container>
            <Jumbotron className="text-center">
                <h2>Here below are the books you saved</h2>
                <p>You have the option to delete some them if not anymore of interest<br />by clicking on the respective "<i>delete</i>" button</p>
            </Jumbotron>
        </Container>
    )
}

export default HeaderSaved;