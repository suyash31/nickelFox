
const initialState = {
	general: [],
	business: [],
	entertainment: [],
	health: [],
	science: [],
	sports: [],
	technology: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'general':
			return { ...state, general: action.payload }
		case 'business':
				return { ...state, business: action.payload }
		case 'entertainment':
				return { ...state, entertainment: action.payload }
		case 'health':
				return { ...state, health: action.payload }
		case 'science':
				return { ...state, science: action.payload }
		case 'sports':
				return { ...state, sports: action.payload }
		case 'technology':
				return { ...state, technology: action.payload }
		default:
			return state;
	}
}


// function updateVeryNestedField(state, action) {
//   return {
//     ...state,
//     first: {
//       ...state.first,
//       second: {
//         ...state.first.second,
//         [action.someId]: {
//           ...state.first.second[action.someId],
//           fourth: action.someValue
//         }
//       }
//     }
//   }
// }

