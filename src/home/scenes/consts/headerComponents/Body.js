import React, { Component } from 'react';
import styled, { css } from "styled-components";
import { Col, Row } from 'reactstrap'
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
	@media (max-width: 575px) {
		margin: 15px 0;
	}
`
const Burger = styled(Col)`
	cursor: pointer;
	display: inline-block;
	img {
		width: 34px;
		height: auto;
		position: absolute;
		right: 15px; top: 10px;
	}
	@media (max-width: 575px) {
		margin: 15px 0;
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
				<Row style={{ padding: "40px 0" }}>
					<Name 
							xl={ 9 }
							lg={ 9 }
							md={ 9 } 
							sm={ 8 }
							xs={ 12 }>
						<h1><Link to="/" onClick={ () => toggleDefaultHeader(false) }>Dominik Tomczik</Link></h1>
						<h2>( průmyslový  &&  grafický designér )</h2>
					</Name>
					<Beta 
							xl={{ size: 2, offset: 0 }} 
							lg={{ size: 2, offset: 0 }} 
							md={{ size: 2, offset: 0 }} 
							sm={{ size: 3, offset: 0 }} 
							xs={{ size: 6, offset: 0 }}
						>
						<div>BETA VERZE</div>
					</Beta>
					<Burger 
							xl={ 1 }
							lg={ 1 }
							md={ 1 } 
							sm={ 1 } 
							xs={ 6 }
							onClick={ () => toggleOpenContact(true) }>
	    				<img src={ (process.env.PUBLIC_URL + '/img/icons/burger.svg') } />
					</Burger>
				</Row>
			</div>
		);
	}
}
