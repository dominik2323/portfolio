import React, { Component } from 'react';
import styled from 'styled-components'
import { Col, Row, Grid } from 'react-bootstrap'

const H1 = styled.h1`
	font-size: 36px;
	font-weight: 300;
	text-align: center;
	line-height: 1.3em;
	letter-spacing: .02em;
	margin-top: 50px;
`
const Img = styled.img`
`

export default class ErrProject extends Component {
	render() {
		const { urlPath } = this.props
		return (
			<Grid fluid>
				<Row>
					<Col md={ 6 } mdOffset={ 3 }>
	    				<Img src={ (process.env.PUBLIC_URL + '/img/icons/dead.svg') } />
					</Col>
				</Row>
			</Grid>
		);
	}
}
