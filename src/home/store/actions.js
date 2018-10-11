import { 
	fetchData,
	fetchDataOrder,
	setContactOpen,
	setFilterProjects,
	loader
} from './types'

import * as R from 'ramda'

// enable to offline version
// import { data } from '../../data/data.json'
// import { dataOrder } from '../../data/dataOrder.json'

import database from 'firebase/database'
import firebase from '../../database/firebase'



// enable to offline version
// export const dataLoader = () => dispatch => {
// 	dispatch(fetchData(R.filter(conditions, data)))
// 	dispatch(fetchDataOrder(dataOrder))
// 	// dispatch(_dataLoader())
// }

export const dataLoader = () => dispatch => {
	const build = R.prop(process.env.REACT_APP_BUILD)
	const ref = firebase.database().ref()
	ref.on('value', x => {
		let dataTree = build(x.val())
		let secretOnesCondition = dataTree.secretOnes ? R.either(R.equals(false), R.equals(true)) : R.equals(false)
		const conditions = R.where({
			'active': R.equals(true),
			'secretOne': secretOnesCondition
		})
		dispatch(fetchData(R.filter(conditions, dataTree.data)))
		dispatch(fetchDataOrder(dataTree.dataOrder))
		dispatch(loader(false))
	})
}

export const toggleContact = (bool) => dispatch => {
	dispatch(setContactOpen(bool))
}

export const filterProjectActivator = (tag) => dispatch => {
	dispatch(setFilterProjects(tag))
}

