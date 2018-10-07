import * as R from "ramda"
import { createSelector } from "reselect"

import { 
	getProjectData,
	getProjectFilter,
	getOrderData
} from './reducer'

export const getPathname = state => state.router.location.pathname

const simpleProjects = ( getProjectData ) => ({
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
	(getProjectData, getPathname) => R.filter(R.propEq('url', getPathname), getProjectData)
)


export const selectActiveOrder = createSelector(
	getProjectFilter, 
	getOrderData, 
	(getProjectFilter, getOrderData) => R.prop(getProjectFilter, getOrderData)
)

// Combined with size settings of project imgs
export const selectSimpleProjects = createSelector(
	getProjectData, 
	selectActiveOrder,
	(getProjectData, selectActiveOrder) => {
		return (
			R.map(x => 
				R.merge(
					R.map(simpleProjects, getProjectData)[x.id - 1],
					{ size: x.size }
				), selectActiveOrder
			)
		)
	}
)

export const selectFilteredProjects = createSelector(
	selectSimpleProjects,
	selectActiveOrder,
	(selectSimpleProjects, selectActiveOrder) => {
		const pick = x => R.filter(R.propEq('id', x.id), selectSimpleProjects)
		return R.flatten(R.map(pick, selectActiveOrder))
	}
)


	
