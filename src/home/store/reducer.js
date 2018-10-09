import * as R from "ramda"
import { 
	PROJECT_DATA,
	CONTACT_OPENED,
	FILTER_PROJECTS,
	ORDER_DATA,
	LOADING
 } from './types'

const defaultState = {
	"projectData": [],
	"orderData": [],
	"contactOpened": false,
	"filterProjects": 'featured',
	"loading": true
}

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case PROJECT_DATA: {
			return R.assoc('projectData', action.payload, state)
		}
		case CONTACT_OPENED: {
			return R.assoc('contactOpened', action.payload, state)
		}
		case FILTER_PROJECTS: {
			return R.assoc('filterProjects', action.payload, state)
		}
		case ORDER_DATA: {
			return R.assoc('orderData', action.payload, state)
		}
		case LOADING: {
			return R.assoc('loading', action.payload, state)
		}
		default: {
			return state
		}
	}
}

export const isContactOpened = R.path(['main', 'contactOpened']);
export const getProjectData = R.path(['main', 'projectData']);
export const getProjectFilter = R.path(['main', 'filterProjects']);
export const getOrderData = R.path(['main', 'orderData']);
export const getLoadingStatus = R.path(['main', 'loading']);

