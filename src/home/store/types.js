export const PROJECT_DATA = 'PROJECT_DATA'
export const BIO_OPENED = 'BIO_OPENED'
export const CONTACT_OPENED = 'CONTACT_OPENED'


export const fetchData = (data) => ({
	type: PROJECT_DATA,
	payload: data
})

export const setBioOpen = (bool) => ({
    type: BIO_OPENED,
    payload: bool
});

export const setContactOpen = (bool) => ({
    type: CONTACT_OPENED,
    payload: bool
});
