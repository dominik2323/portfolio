import * as R from "ramda"
import { createSelector } from "reselect"

import { 
	getProjectData,
	getActiveBioContent,
	getBioData
} from './reducer'

const getPathname = state => state.router.location.pathname
// R.path(['router', 'location', 'pathname'], (state))

const simpleProjects = getProjectData => ({
	id: R.prop('id', getProjectData),
	active: R.prop('active', getProjectData),
	subTitle: R.prop('subTitle', getProjectData),
	awards: R.prop('awards', getProjectData),
	mainTag: R.prop('mainTag', getProjectData),
	url: R.prop('url', getProjectData),
	projectName: R.prop('projectName', getProjectData),
	landingPageImage: R.prop('landingPageImage', getProjectData),
	// annotation: R.prop('annotation', getProjectData),
	intro: R.prop('intro', getProjectData)
})

export const selectActiveProjectData = createSelector(
	getProjectData,
	getPathname,
	(getProjectData, getPathname) => {
		return (
			R.filter(R.propEq('url', getPathname), getProjectData)	
		)
	}
)

export const selectSimpleProjects = createSelector(getProjectData, R.map(simpleProjects))

export const selectActiveBioData = createSelector(
	getBioData,
	getActiveBioContent,
	(getBioData, getActiveBioContent) => {
		return R.filter(R.propEq('id', getActiveBioContent), getBioData)
	}
)

	
