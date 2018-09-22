import React, { Component } from 'react';
import styled, { css } from "styled-components";
import { Col, Row } from 'react-bootstrap'

const BioContainer = styled.div`
	display: none;
	opacity: 0;
	transition: opacity 0.1s;
	transition-timing-function: ease-in;
	transition-delay: 0.2s;
	${props => props.showBio && css`
		display: block;
		opacity: 1;
	`}
`

export default class Bio extends Component {
	render() {
		const { showBio } = this.props
		return (
			<Row>
				<Col md={ 12 }>
					<BioContainer showBio={ showBio }>
						<div>Spolupráce</div>
						<div>O mně</div>
						<div style={{ backgroundColor: 'gray', height: '1500px', width: '200px'}}>
							Content
						</div>
					</BioContainer>
				</Col>
			</Row>
		);
	}
}
