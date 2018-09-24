import { 
	fetchData,
	setBioOpen,
	setContactOpen,
	setBioContent,
	fetchBioData
} from './types'

import * as R from 'ramda'
import { data } from '../../data/data.json'
import { ids } from '../../data/secretOnes.json'
import { bio } from '../../data/bio.json'

export const dataLoader = () => dispatch => {
	const b = ids => R.filter(R.propEq('id', ids))(data)
	const c = R.flatten(R.map(b, ids))
	// publicData in action arg will hides all secret projects
	const publicData = R.without(c, data)
	
	dispatch(fetchData(data))
	dispatch(fetchBioData(bio))
}

export const toggleBio = (bool) => dispatch => {
	dispatch(setBioOpen(bool))
}

export const toggleContact = (bool) => dispatch => {
	dispatch(setContactOpen(bool))
}

export const toggleBioContent = (id) => dispatch => {
	dispatch(setBioContent(id))
}

