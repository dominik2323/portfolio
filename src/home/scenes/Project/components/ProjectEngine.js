import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap'
import * as R from 'ramda'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = styled.div`
	padding: 30px 60px;
	display: inline-block;
	background-color: black;
	color: white;
	letter-spacing: .06em;
	text-transform: uppercase;
	font-size: 12px;
	margin-left: 15px;
	a {
		color: white;
	}
	a:visited {
		color: white;
	}
	a:hover {
		text-decoration: none;
	}
`

export default class ProjectEngine extends Component {
	render() {
		const { projectData } = this.props
		return (
			<div>
				<img src={ projectData.intro.src } alt={ projectData.intro.alt } style={{ maxHeight: "100vh", objectFit: "cover" }}/>
				<Grid fluid>
					<Row>
						<Col md={ 12 }>
							<h1 style={{ "marginBottom": "18px", marginTop: '22px' }}>{ projectData.projectName }</h1>
							<p>
								{ projectData.subTitle }
								{ !R.isEmpty(projectData.cooperation) && '\nSpolupráce: ' + projectData.cooperation }
							</p>
						</Col>
					</Row>
					<Row>
						<Col md={ 6 } mdOffset={ 3 } style={{ "marginBottom": "100px", "marginTop": "70px" }}>
						<p>{ projectData.annotation }</p>
						</Col>
					</Row>
					{ !R.isEmpty(projectData.content) && projectData.content.map((x, i) => {
						return (
							<Row key={ i } style={{ marginBottom: '30px' }}>
								{ x.map((y, k) => {
									return (
										<Col key={ k } md={ y.cols }>
											<img src={ window.location.origin + y.src } alt={ y.alt } />
										</Col> 
									)
								}) }
							</Row>
						)
					})}
					<Link to="/">
						<Footer>
							Zpět na hlavní stránku
						</Footer>
					</Link>
				</Grid>
			</div>
		)
	}
}
