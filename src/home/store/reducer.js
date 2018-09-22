import * as R from "ramda"
import { 
	PROJECT_DATA,
	BIO_OPENED,
	CONTACT_OPENED
 } from './types'

const defaultState = {
	"projectData": [],
	"bioOpened": false,
	"contactOpened": false
}
export const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case PROJECT_DATA: {
			return R.assoc('projectData', action.payload, state)
		}
		case BIO_OPENED: {
			return R.assoc('bioOpened', action.payload, state)
		}
		case CONTACT_OPENED: {
			return R.assoc('contactOpened', action.payload, state)
		}
		default: {
			return state
		}
	}
}

export const isBioOpened = R.path(['main', 'bioOpened']);
export const isContactOpened = R.path(['main', 'contactOpened']);
export const getProjectData = R.path(['main', 'projectData']);

