import { combineReducers } from 'redux'
//import db from '../firebase'

//let firebaseRef = db.ref('/services')


const Services = () => {
	return [
		{id: 1, title: 'Office Cleaning Services', 
		name: 'offices-div animated fadeIn',
		type: 'Office',
		detailDiv: 'office-detail animated fadeIn', 
		detailHeader: '"A sorted environment greatly improves productivity."',
		slogan: 'Freshen up your office!'},
		
		{id: 2, title: 'Condominiums', name: 'condominiums-div animated fadeIn', 
		type: 'Condominiums',
		detailDiv: 'condo-detail animated fadeIn', 
		detailHeader: '',
		slogan: 'Uplift your Quality of Living!'},

		{id: 3, title: 'Restaurants', name: 'restaurants-div animated fadeIn',
		type: 'Retaurants',
		detailDiv: 'restaurant-detail animated fadeIn', 
		detailHeader: '',
		slogan: 'Impress your Customers!'},
		
		{id: 4, title: 'Hotels', name: 'hotels-div animated fadeIn',
		type: 'Hotels',
		detailDiv: 'hotels-detail animated fadeIn', 
		detailHeader: '',
		slogan: 'Cleanliness is most reviewed.'},
		
		{id: 5, title: 'Malls', name: 'malls-div animated fadeIn',
		type: 'Malls',
		detailDiv: 'malls-detail animated fadeIn', 
		detailHeader: '',
		slogan: 'On-Demand Services.'},
		
		{id: 6, title: 'Hospitals', name: 'hospitals-div animated fadeIn',
		type: 'Hospitals',
		detailDiv: 'hospital-detail animated fadeIn', 
		detailHeader: '',
		slogan: 'Customizable to suit specific cleaning needs.'},
	]
}

/*const getData = () => {
	firebaseRef.on('value', snap => {
		let services = snap.val()
		// map services object from firebase
		let arr = []
		for (let key in services){
			arr.push(services[key])
		}
		return arr
	})
}*/

const ProServices = () => {
	return [{id: 1}]
}

const ActiveService = (state={}, action) => {
	switch(action.type) {
		case 'SERVICE_SELECTED':
			return action.payload
		default:
			return state
	}
}

const Specs = () => {
	return [
		{id: 1, name: 'spray', contents: 'Sanitize Desks, Chairs, Counters, Phones, Computers, Filing Cabinets, Light Fixtures, Doors & Handles '},
		{id: 2, name: 'vacuum', contents: 'Nightly vacuum, Carpet Shampoo, Deodorize, Steam, Pet friendly solutions'},
		{id: 3, name: 'mop', contents: 'Mop & Polish Floor. Machine buff floors'},
		{id: 4, name: 'windows', contents: 'Complete Window cleaning inside & outside, experience the difference'},
		{id: 5, name: 'bin', contents: 'Nightly Empty trash bins, Quarterly sanitize garbage areas & bins'},
	]
}

const SpecsSelected = (state={}, action) => {
	switch(action.type){
		case 'SPECS_SELECTED':
			return action.payload
		default:
			return state
	}
}

const Call = (state = {}, action) => {
	if(action.type === 'TOGGLE_CALL') {
		return !action.payload	
	} else {
		return true
	}
}

const Data = (state={}, action) => {
	switch(action.type){
		case 'REQUEST_DATA':
			console.log('data requested')
			return null
		case 'LOAD_DATA':
			return action.payload

		default:
			return state
	}
}

const reducers = combineReducers({
	services: Services, 
	proServices: ProServices,
	active: ActiveService,
	specs: Specs,
	specsSelected: SpecsSelected, 
	call: Call,
	data: Data})
export default reducers