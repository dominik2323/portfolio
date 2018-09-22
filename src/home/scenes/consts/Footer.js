import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap'
import styled from 'styled-components'

const H1 = styled.h1`
	font-size: 30px;
`

const H2 = styled.h2`

`

export default class Footer extends Component {
	render() {
		return (
			<Grid fluid className="footer">
				<Row>
					<Col md={ 6 }>
						<H1>Dominik Tomczik</H1>
					</Col>
					<Col md={ 6 }>
						<H2>dominik@tomczik.cz</H2>
					</Col>
				</Row>
			</Grid>
		);
	}
}
