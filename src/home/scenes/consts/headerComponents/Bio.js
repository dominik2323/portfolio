import React, { Component } from 'react';
import styled, { css } from "styled-components";
// import { Col, Row } from 'react-bootstrap'
import Scrollbar from './../Scrollbar'
import BioContent from './BioComponents/BioContent'

const BioContainer = styled.div`
	position: fixed;
	top: 0; left: 0; right: 30%; bottom: 0;
	transform: translateX(143%);
	transition: transform 0.3s;
	transition-timing-function: ease-in;
	background-color: white;
	${props => props.showBio && css`
		transform: translateX(0%);
	`}
`
const Content = styled.div`
	opacity: 0;
	transition: opacity 0.2s;
	transition-delay: 0.5s;
	transition-timing-function: ease-out;
	${props => props.showBio && css`
		opacity: 1;
	`}
`
const Contact = styled.div`
	position: fixed;
	right: 0px; top: 0; bottom: 0; left: 70%;
	padding: 130px 150px 130px 100px;  
	background-color: black;
	transition-timing-function: ease-in;
	transition: 0.2s;
	z-index: 10;
	background-color: #171d1f;
	transform: translateX(100%);
	color: white;
	img {
		position: absolute;
		right: 30px;
		top: 43px;
		width: 60px;
		height: auto;
	}
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
export default class Bio extends Component {
	render() {
		const { 
				showBio,
				showContact,
				toggleOpenBio,
				toggleDefaultHeader,
				toggleBioContent,
				activeBioData } = this.props
		return (
			<div>
				<Contact showInfo={ showContact }>
					<div onClick={ () => toggleDefaultHeader(false) } style={{ cursor: 'pointer' }}>
	    				<img src={ (process.env.PUBLIC_URL + '/img/icons/close.svg') }/>
					</div>
					<div onClick={ () => toggleOpenBio(!showBio) }>more content</div>
					<h3>KONTAKT</h3>
					<h1>dominik@tomczik.cz<br />
					775 337 604</h1>
				</Contact>
				<BioContainer showBio={ showBio }>
					<Scrollbar topOffset={ 0 }>
					<BioContent showBio={ showBio } toggleBioContent={ toggleBioContent } activeBioData={ activeBioData }/>
					</Scrollbar>
				</BioContainer>
			</div>
		);
	}
}
