
initialState = {
  countryCode: 'us',
  langCode: 'en'
}
export default (state = initialState, action) => {
	switch (action.type) {
		case 'country':
      return { ...state, countryCode: action.payload }
    case 'language':
      return {...state, langCode: action.payload }
    default: 
      return state;
  }
}