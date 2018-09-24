import React, { Component } from 'react';
import styled, { css } from "styled-components";
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Beta = styled(Col) `
	color: white;
	font-size: 11px;
	font-weight: 300;
	letter-spacing: .12em;
	div {
		display: inline-block;
		background-color: #171d1f;
		padding: 10px;
	}
`
const Burger = styled(Col)`
	cursor: pointer;
	display: inline-block;
	img {
		width: 34px;
		height: auto;
		position: absolute;
		right: 0; top: 10px;
	}
`

const Name = styled(Col)`
	h1 {
		font-size: 21px;
		padding-bottom: 9px;
		a {
			color: black;
		}
		a:hover {
			text-decoration: none;
		}
	}
	h2 {
		font-size: 11px;
		letter-spacing: .12em;
		text-transform: uppercase;
	}
`
export default class Body extends Component {
	render() {
		const { toggleOpenContact, toggleDefaultHeader } = this.props
		return (
			<div>
				<Row style={{ padding: "40px 15px" }}>
					<Name 
							md={ 4 } 
							sm={ 5 }>
						<h1><Link to="/" onClick={ () => toggleDefaultHeader(false) }>Dominik Tomczik</Link></h1>
						<h2>( průmyslový  &&  grafický designér )</h2>
					</Name>
					<Beta 
							md={ 1 } 
							mdOffset={ 6 } 
							sm={ 3 } 
							smOffset={ 3 }>
						<div>BETA VERZE</div>
					</Beta>
					<Burger 
							md={ 1 } 
							sm={ 1 } 
							onClick={ () => toggleOpenContact(true) }>
	    				<img src={ (process.env.PUBLIC_URL + '/img/icons/burger.svg') } />
					</Burger>
				</Row>
			</div>
		);
	}
}
