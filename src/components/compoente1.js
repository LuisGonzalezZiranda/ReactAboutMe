import React from "react";
import yo from './img/yo.jpg'
import yo2 from './img/yo2.jpg'
import { Navbar, Container } from 'react-bootstrap';
import { Avatar } from "@mui/material";
function Title() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Avatar alt="Remy Sharp" src={yo} sx={{ width: 70, height: 70 }} />
                    <Navbar.Brand href="#home" variant="h3">

                        Luis Enrique Ziranda Gonzalez.
                    </Navbar.Brand>
                    <Avatar alt="Remy Sharp" src={yo2} sx={{ width: 70, height: 70 }} />
                </Container>
            </Navbar>
        </div>
    );

}

export default Title