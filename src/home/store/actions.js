import { 
	fetchData,
	fetchDataOrder,
	setContactOpen,
	setFilterProjects,
	loader
} from './types'

import * as R from 'ramda'
import { data } from '../../data/data.json'
import { dataOrder } from '../../data/dataOrder.json'
// import database from 'firebase/database'
// import firebase from '../../database/firebase'


const conditions = R.where({
	active: R.equals(true),
	// secretOne: R.equals(false),
})

export const dataLoader = () => dispatch => {
	dispatch(fetchData(R.filter(conditions, data)))
	dispatch(fetchDataOrder(dataOrder))
	// dispatch(_dataLoader())
}

// export const dataLoader = () => dispatch => {
// 	const ref = firebase.database().ref().once('value')
// 	ref.then(x => {
// 		let dataTree = x.val()
// 		// dispatch(loader(true))
// 		dispatch(fetchData(R.filter(conditions, dataTree.data)))
// 		dispatch(fetchDataOrder(dataTree.dataOrder))
// 		dispatch(loader(false))
// 	})
// }

export const toggleContact = (bool) => dispatch => {
	dispatch(setContactOpen(bool))
}

export const filterProjectActivator = (tag) => dispatch => {
	dispatch(setFilterProjects(tag))
}

