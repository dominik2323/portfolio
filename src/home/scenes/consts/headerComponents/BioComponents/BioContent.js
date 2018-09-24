import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import styled, { css } from 'styled-components'

const Nav = styled(Row)`
	width: 390px;
	margin: auto;
	a {
		color: black;
		padding: 0 70px;
	}
`
const NavEl = styled(Col)`
	text-align: center;
	padding: 50px 0;
	letter-spacing: .06em;
	font-size: 16px;
	font-weight: 400;
`
const Content = styled(Row)`
`
export default class BioContent extends Component {
	render() {
		const { toggleBioContent, activeBioData } = this.props
		return (
			<Grid fluid>
				<Nav>
					<a href='javascript:void(0)' md={ 6 } onClick={ () => toggleBioContent(1) }>
						Spolupráce
					</a> 
					<a href='javascript:void(0)' md={ 6 } onClick={ () => toggleBioContent(2) }>
						O mně
					</a> 
				</Nav>
				<Content>
					<Col md={ 12 }>
						{ activeBioData[0].content }
					</Col>
				</Content>
			</Grid>
		);
	}
}
