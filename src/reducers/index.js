import { combineReducers } from 'redux'

const Services = () => {
	return [
		{id: 1, title: 'Office Cleaning Services', 
		name: 'offices-div animated fadeIn',
		type: 'Office',
		detailDiv: 'office-detail animated fadeIn', 
		detailHeader: '\"A sorted environment greatly improves productivity.\"'
		
		},

		{id: 2, title: 'Condominiums', name: 'condominiums-div animated fadeIn'},
		{id: 3, title: 'Restaurants', name: 'restaurants-div animated fadeIn'},
		{id: 4, title: 'Hotels', name: 'hotels-div animated fadeIn'},
		{id: 5, title: 'Malls', name: 'malls-div animated fadeIn'},
		{id: 6, title: 'Hospitals', name: 'hospitals-div animated fadeIn'},
	]
}

const ActiveService = (state={}, action) => {
	switch(action.type) {
		case 'SERVICE_SELECTED':
			return action.payload

		default:
			return state
	}
}

const reducers = combineReducers({services: Services, active: ActiveService})
export default reducers