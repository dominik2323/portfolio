import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProjectEngine from './components/ProjectEngine'
import ErrProject from './components/ErrProject'

import { selectActiveProjectData } from '../../store/selectors'
import * as R from "ramda"

const Verification = ({sendProjectData, url}) => {
	return (
		R.isNil(sendProjectData) ? <ErrProject urlPath={ url }/> : <ProjectEngine projectData={ sendProjectData }/>
	)
}

class Project extends Component {
	render() {
		const { projectData, match } = this.props
		return (
			<Verification sendProjectData={ projectData[0] } url={ match.url }/>
		);
	}
} export default connect(
	state => ({
		projectData: selectActiveProjectData(state),
	})
)(Project)
