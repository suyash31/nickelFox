
export const saveSourceList = (type, payload) => {
	return {
		type: type,
		payload: payload,
	}
}

export const saveCountryCode = (data) => {
	return {
		type: 'country',
		payload: data,
	}
}

export const saveLanguageCode = (data) => {
	return {
		type: 'language',
		payload: data
	}
}