import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Project from './Project/Project'
import SelectProject from './SelectProject/SelectProject'

export default class Selectcontent extends Component {
	render() {
		return (
			<div style={{ marginTop: '124px' }}>
				<Route exact path="/" component={ SelectProject } />
          		<Route exact path="/project/:projectId" component={ Project } />
			</div>
		);
	}
}
