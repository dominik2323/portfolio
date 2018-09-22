import React, { Component } from 'react';
import styled, { css } from "styled-components";
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Beta = styled(Col) `
	padding: 10px;
	display: inline-block;
	background-color: #171d1f;
	color: white;
	font-size: 11px;
	font-weight: 300;
	letter-spacing: .12em;
`
const Burger = styled(Col)`
	cursor: pointer;
	display: inline-block;
	position: absolute;
	right: 0;
	top: 9px;
	position: relative;
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
		const { toggleOpenBio, showBio, toggleOpenContact, showContact, toggleDefaultHeader } = this.props
		const changeIcon = showContact ? 'close' : 'burger'
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
							md={ 2 } 
							mdOffset={ 4 } 
							sm={ 3 } 
							smOffset={ 3 }>
						BETA VERZE
					</Beta>
					<Burger 
							md={ 1 } 
							sm={ 1 } 
							onClick={ () => toggleOpenContact(!showContact) }>
	    				<img src={ (process.env.PUBLIC_URL + '/img/icons/' + changeIcon + '.svg') } />
					</Burger>
					<Col 
							md={ 1 } 
							onClick={ () => toggleOpenBio(!showBio) }> 
						b
					</Col>
				</Row>
				<Menu showInfo={ showContact }>
					<h3>KONTAKT</h3>
					<h1>dominik@tomczik.cz<br />
					775 337 604</h1>
				</Menu>
			</div>
		);
	}
}
