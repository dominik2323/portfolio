import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap'
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
const ProjectTitle = styled(Col)`
	h1 {
		margin: 22px 0 18px 0;
	}
	p {
		color: gray;
	}
`
const ProjectAnnotation = styled(Col)`
	margin: 100px 0 70px 0;
`
const ProjectContent = styled(Col)`
	margin-bottom: 30px;
`

export default class ProjectEngine extends Component {
	render() {
		const { projectData } = this.props
		return (
			<div>
				<img 
					src={ projectData.intro.src } 
					alt={ projectData.intro.alt } 
					style={{ maxHeight: "100vh", objectFit: "cover" }}/>
				<Container fluid>
					<Row>
						<ProjectTitle 
							xl={{ size: 12, offset: 0 }}
							lg={{ size: 12, offset: 0 }}
							md={{ size: 10, offset: 1 }}
							sm={{ size: 12, offset: 0 }}
							xs={{ size: 12, offset: 0 }}
							>
							<h1>{ projectData.projectName }</h1>
							<p>
								{ projectData.subTitle }
								{ !R.isEmpty(projectData.cooperation) && '\nSpolupráce: ' + projectData.cooperation }
							</p>
						</ProjectTitle>
					</Row>
					<Row>
						<ProjectAnnotation 
							xl={{ size: 6, offset: 3 }}  
							lg={{ size: 8, offset: 2 }}  
							md={{ size: 10, offset: 1 }}  
							sm={{ size: 12, offset: 0 }}  
							xs={{ size: 12, offset: 0 }}>
						<p>{ projectData.annotation }</p>
						</ProjectAnnotation>
					</Row>
					{ !R.isEmpty(projectData.content) && projectData.content.map((x, i) => {
						return (
							<Row key={ i }>
								{ x.map((y, k) => {
									return (
										<ProjectContent 
											key={ k } 
											xl={ y.cols }
											lg={ y.cols }
											md={ 12 }
											sm={ 12 }
											xs={ 12 }
											>
											<img src={ window.location.origin + y.src } alt={ y.alt } />
										</ProjectContent> 
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
				</Container>
			</div>
		)
	}
}
