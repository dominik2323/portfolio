import React, { Component } from 'react';
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Img = styled.img`
	height: 500px;
	margin-bottom: 30px;
	object-fit: cover;
`
const Label = styled.div`
	opacity: 0;
	position: absolute;
	top: 80%;
	padding: 6px 20px;
	background-color: rgba(0, 0, 0, 0.7);
	right: 0;
	left: 0;
	color: white;
	font-size: 14px;
	font-weight: 300;
	letter-spacing: .07em;
	line-height: 1.5em;
	transition-timing-function: ease-in;
	transition: 0.1s;
	${props => props.showLabel && css`
		opacity: 1;
	`}
`

export default class SelectProjectEngine extends Component {
	constructor(props) {
		super(props)
		this.state = {
			onHover: false
		}
		this.onHoverHandler = this.onHoverHandler.bind(this)
	}
	onHoverHandler(props) {
		this.setState({ onHover: !this.state.onHover })
	}
	render() {
		const { projectData } = this.props
		return (
			<Col 
				xl={ 3 }
				lg={ 4 }
				md={ 6 } 
				sm={ 12 }
				xs={ 12 }
				>
				<Link to={ projectData.url }>
					<Img 
						src={ projectData.landingPageImage.src } 
						alt={ projectData.landingPageImage.alt }
						onMouseOver={ this.onHoverHandler }
						onMouseOut={ this.onHoverHandler }
						/>
					<Label showLabel={ this.state.onHover }>{ projectData.projectName }</Label>
				</Link>
			</Col>
		);
	}
}
