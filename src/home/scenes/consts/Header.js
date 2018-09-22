import React, { Component } from 'react';
import styled, { css } from "styled-components";
import { Col, Row, Grid } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
	background-color: white;
`
const H1 = styled.h1`
	font-size: 21px;
	padding-bottom: 9px;
	a {
		color: black;
	}
	a:hover {
		text-decoration: none;
	}
`
const H2 = styled.h2`
	font-size: 11px;
	letter-spacing: .12em;
	text-transform: uppercase;
`
const Beta = styled.div `
	padding: 10px;
	display: inline-block;
	background-color: #171d1f;
	color: white;
	font-size: 11px;
	font-weight: 300;
	letter-spacing: .12em;
`
const Burger = styled.div`
	cursor: pointer;
	display: inline-block;
	position: absolute;
	right: 0;
	top: 9px;
	img {
		width: 34px;
	}
`
const Menu = styled.div`
		position: fixed;
		right: 0px;
		top: 124px;
		padding: 130px 150px 130px 100px;  
		background-color: black;
		transition-timing-function: ease-in;
		transition: 0.2s;
		z-index: 10;
		background-color: #171d1f;
		transform: translateX(100%);
		color: white;
		h1 {
			font-weight: 800;
			font-size: 36px;
			letter-spacing: .03em;
			line-height: 53px;
			font-variant-numeric: oldstyle-nums;
		}
		h3 {
			font-weight: 400;
			font-size: 12px;
			letter-spacing: .07em;
			margin-bottom: 10px;
		}
	${props => props.showInfo && css`
		transform: translateX(0%);
	`}
	
`	


export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state={
			showInfo: false,
			icon: 'burger'
		}
		this.showInfoHandler = this.showInfoHandler.bind(this)
	}
	showInfoHandler(props) {
		this.setState({
			showInfo: !this.state.showInfo,
			icon: this.state.showInfo ? 'burger' : 'close'
		})
	}
	render() {
		return (
			<HeaderContainer>
				<Grid fluid>
					<Row style={{ padding: "40px 15px" }}>
						<Col md={ 4 } sm={ 5 }>
							<H1><Link to="/">Dominik Tomczik</Link></H1>
							<H2>( průmyslový  &&  grafický designér )</H2>
						</Col>
						<Col md={ 2 } mdOffset={ 5 } sm={ 3 } smOffset={ 3 }>
							<Beta>
								BETA VERZE
							</Beta>
						</Col>
						<Col md={ 1 } sm={ 1 } style={{ position: "relative" }}>
							<Burger onClick={ this.showInfoHandler }>
			    				<img src={ (process.env.PUBLIC_URL + '/img/icons/' + this.state.icon + '.svg') } />
							</Burger>
						</Col>
					</Row>
					<Menu showInfo={ this.state.showInfo }>
						<h3>KONTAKT</h3>
						<h1>dominik@tomczik.cz<br />
						775 337 604</h1>
					</Menu>
				</Grid>
			</HeaderContainer>
		);
	}
}
