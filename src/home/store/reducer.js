import * as R from "ramda"
import { 
	PROJECT_DATA
 } from './types'

const defaultState = {
	"projectData": [],
}
export const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case PROJECT_DATA: {
			return R.assoc('projectData', action.payload, state)
		}
		default: {
			return state
		}
	}
}

export const getActiveProject = R.prop('activeProjectId');
export const getProjectData = R.path(['main', 'projectData']);

