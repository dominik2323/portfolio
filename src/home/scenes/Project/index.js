import React from 'react';
import { connect } from 'react-redux'

import ProjectEngine from './Components/ProjectEngine'
import ErrProject from './Components/ErrProject'

import { selectActiveProjectData } from '../../store/selectors'
import * as R from "ramda"

const Project = ({ projectData }) => {
	return (
		!R.isEmpty(projectData) ? <ProjectEngine projectData={ projectData[0] }/> : <ErrProject/> 
	)
} 

export default connect(
	state => ({
		projectData: selectActiveProjectData(state),
	})
)(Project)
