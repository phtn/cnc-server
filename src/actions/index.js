
export const selectService = (service) => {
	return {
		type: 'SERVICE_SELECTED',
		payload: service
	}
}
export const toggleCall = (call) => {
	return {
		type: 'TOGGLE_CALL',
		payload: call
	}
}
export const selectSpec = spec => {
	console.log(spec)
	return {
		type: 'SPEC_SELECTED',
		spec
	}
} 