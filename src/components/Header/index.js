import React from "react";
import { Container,Jumbotron,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';
import './header.css';

export default function Header() {
    return (
        <Container as="header">
			<Jumbotron className="header-image">
				<img src={logo} className="logo" alt="logo"/>
			</Jumbotron>
				
			<Nav className="justify-content-center mb-3 mt-3" defaultActiveKey='/about' as="ul">
				<Nav.Item as="li">
					<Nav.Link as={NavLink} to='/about' activeStyle={{color:"rgb(255,153,102)"}}>About</Nav.Link>
				</Nav.Item>
				<Nav.Item as="li">
					<Nav.Link as={NavLink} to='/events' activeStyle={{color:"rgb(255,153,102)"}}>Events</Nav.Link>
				</Nav.Item>
				<Nav.Item as="li">
					<Nav.Link as={NavLink} to='/cast' activeStyle={{color:"rgb(255,153,102)"}}>Cast</Nav.Link>
				</Nav.Item>
			</Nav>
		</Container>
    )
}

