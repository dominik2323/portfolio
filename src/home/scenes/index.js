import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Project from './Project/'
import SelectProject from './SelectProject/'
import ErrProject from './Project/Components/ErrProject'
import About from './About'

const Selectcontent = () => {
    return (
		<div style={{ marginTop: '124px' }}>
			<Switch>
				<Route exact path="/" component={ SelectProject } />
	      		<Route exact path="/project/:projectId" component={ Project } />
	      		<Route exact path="/about" component={ About } />
	      		<Route component={ ErrProject } />
			</Switch>
		</div>
    )
}

export default Selectcontent
