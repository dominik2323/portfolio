export const PROJECT_DATA = 'PROJECT_DATA'
export const CONTACT_OPENED = 'CONTACT_OPENED'
export const FILTER_PROJECTS = 'FILTER_PROJECTS'
export const ORDER_DATA = 'ORDER_DATA'
export const LOADING = 'LOADING'


export const fetchData = (data) => ({
	type: PROJECT_DATA,
	payload: data
})

export const fetchDataOrder = orderData => ({
    type: ORDER_DATA,
    payload: orderData
})

export const setContactOpen = (bool) => ({
    type: CONTACT_OPENED,
    payload: bool
})

export const setFilterProjects = (data) => ({
    type: FILTER_PROJECTS,
    payload: data
})

export const loader = bool => ({
	type: LOADING,
	payload: bool
})