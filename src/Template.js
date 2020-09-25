import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';


import {
	Route,
	BrowserRouter,NavLink
} from "react-router-dom";
import StackedColumnChart from "./StackedColumnChart";

class Template extends Component {

	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
					<Navbar.Brand href="/"> </Navbar.Brand><span className="hidden-xs text-muted"></span>
				</Navbar>
				<BrowserRouter>
					<Row>
							<ListGroup.Item> <NavLink to="/stackedColumnChart">Stacked Column Chart</NavLink></ListGroup.Item>
	

						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
									
									<Route path="/StackedColumnChart" component={StackedColumnChart} />
									
								</div>
							</Container>
						</Col>
					</Row>
				</BrowserRouter>
			</div>
		);
	}
}

export default Template;
