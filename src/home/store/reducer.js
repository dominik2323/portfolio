import * as R from "ramda"
import { 
	PROJECT_DATA,
	BIO_OPENED,
	CONTACT_OPENED,
	BIO_CONTENT,
	BIO_DATA
 } from './types'

const defaultState = {
	"projectData": [],
	"bioData": [],
	"bioOpened": false,
	"contactOpened": false,
	"bioContent": 1
}
export const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case PROJECT_DATA: {
			return R.assoc('projectData', action.payload, state)
		}
		case BIO_DATA: {
			return R.assoc('bioData', action.payload, state)
		}
		case BIO_OPENED: {
			return R.assoc('bioOpened', action.payload, state)
		}
		case CONTACT_OPENED: {
			return R.assoc('contactOpened', action.payload, state)
		}
		case BIO_CONTENT: {
			return R.assoc('bioContent', action.payload, state)
		}
		default: {
			return state
		}
	}
}

export const isBioOpened = R.path(['main', 'bioOpened']);
export const isContactOpened = R.path(['main', 'contactOpened']);
export const getProjectData = R.path(['main', 'projectData']);
export const getActiveBioContent = R.path(['main', 'bioContent']);
export const getBioData = R.path(['main', 'bioData']);

