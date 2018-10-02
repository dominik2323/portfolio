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

const conditions = R.where({
	active: R.equals(true),
	// secretOne: R.equals(false),
})

export const dataLoader = () => dispatch => {
	dispatch(fetchData(R.filter(conditions, data)))
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

