import { fetchData } from './types'
import * as R from 'ramda'
import { data } from '../../data/data.json'
import { ids } from '../../data/secretOnes.json'

export const dataLoader = () => dispatch => {
	const b = ids => R.filter(R.propEq('id', ids))(data)
	const c = R.flatten(R.map(b, ids))
	// publicData in action arg will hides all secret projects
	const publicData = R.without(c, data)
	
	dispatch(fetchData(data))
}
