import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSimpleProjects } from '../../store/selectors'
import SelectProjectEngine from './components/SelectProjectEngine'
import { Container, Row } from 'reactstrap'

class SelectProject extends Component {
	render() {
		const { featuredProjects } = this.props
		return (
			<Container fluid>
			<Row>
				{
					featuredProjects.map((projectData, i) => {
						return <SelectProjectEngine 
							key={ i }
							projectData={ projectData }
							/>
					})
				}
			</Row>
			</Container>
		);
	}
} 
export default connect(
	state => ({
		featuredProjects: selectSimpleProjects(state),
	})
)(SelectProject)
