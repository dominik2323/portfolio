import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSimpleProjects } from '../../store/selectors'
import SelectProjectEngine from './components/SelectProjectEngine'
import { Grid } from 'react-bootstrap'

class SelectProject extends Component {
	render() {
		const { featuredProjects } = this.props
		return (
			<Grid fluid>
				{
					featuredProjects.map((projectData, i) => {
						return <SelectProjectEngine 
							key={ i }
							projectData={ projectData }
							/>
					})
				}
			</Grid>
		);
	}
} 
export default connect(
	state => ({
		featuredProjects: selectSimpleProjects(state),
	})
)(SelectProject)
