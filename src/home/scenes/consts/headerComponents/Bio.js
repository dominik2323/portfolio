import React, { Component } from 'react';
import styled, { css } from "styled-components";
// import { Col, Row } from 'react-bootstrap'
import Scrollbar from '../Scrollbar'
import BioContent from './BioComponents/BioContent'

const BioContainer = styled.div`
	position: fixed;
	top: 0; left: 0; bottom: 0;
	width: 70%;
	transform: translateX(143%);
	transition: transform 0.3s;
	transition-timing-function: ease-in;
	background-color: white;
	${props => props.showBio && css`
		transform: translateX(0%);
	`}
	@media (max-width: 992px) {
		width: 100%;
		transform: translateY(-143%);
		height: 100%;
		top: 215px;
		${props => props.showBio && css`
			transform: translateY(0%);
		`}
	}
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
	right: 0px; top: 0; bottom: 0;
	width: 30%;
	padding: 100px 30px 30px 30px;  
	background-color: black;
	transition-timing-function: ease-in;
	transition: 0.2s;
	z-index: 10;
	background-color: #171d1f;
	transform: translateX(100%);
	color: white;
	div {
		cursor: pointer;
		position: absolute;
		top: 30px;
		font-size: 12px;
		letter-spacing: .07em;
	}
	img {
		height: auto;
		display: block;
		margin: 0 auto 15px auto;
	}
	.closeIcon {
		right: 30px;
	}
	.closeIcon img {
		width: 36px;
	}
	.openIcon {
		left: 30px;
	}
	.openIcon img {
		width: 25px;
	}
	h1 {
		font-weight: 600;
		font-size: 21px;
		letter-spacing: .05em;
		line-height: 28px;
		font-variant-numeric: oldstyle-nums;
	}
	h3 {
		font-weight: 400;
		font-size: 12px;
		letter-spacing: .07em;
		margin-bottom: 14px;
	}
	${props => props.showInfo && css`
		transform: translateX(0%);
	`}
	@media (max-width: 992px) {
		width: 100%;
		height: 127px;
    	bottom: unset;
		left: 0;
		padding: 0;
		transform: translateY(-100%);
		${props => props.showInfo && css`
			transform: translateY(0%);
		`}
		h1, h3 {
			display: none;
		}
  	}
`	
export default class Bio extends Component {
	render() {
		const { showBio,
				showContact,
				toggleOpenBio,
				toggleDefaultHeader,
				toggleBioContent,
				activeBioData } = this.props
		const bioIcon = showBio ? { icon: 'lessBio', text: 'MÉNĚ' } : { icon: 'moreBio', text: 'VÍCE' }
		return (
			<div>
				<Contact showInfo={ showContact }>
					<div onClick={ () => toggleDefaultHeader(false) } className="closeIcon">
	    				<img src={ (process.env.PUBLIC_URL + '/img/icons/close.svg') }/>
	    				ZAVŘÍT
					</div>
					<div onClick={ () => toggleOpenBio(!showBio) }  className="openIcon">
						<img src={ (process.env.PUBLIC_URL + '/img/icons/' + bioIcon.icon + '.svg') }/>
						{ bioIcon.text } O MNĚ
					</div>
					<h3>KONTAKT</h3>
					<h1>dominik@tomczik.cz<br />
					775 337 604</h1>
				</Contact>
				<BioContainer showBio={ showBio }>
					<Scrollbar topOffset={ 1 }>
					<BioContent showBio={ showBio } toggleBioContent={ toggleBioContent } activeBioData={ activeBioData }/>
					</Scrollbar>
				</BioContainer>
			</div>
		);
	}
}
