export const selectService = (service) => {
	return {
		type: 'SERVICE_SELECTED',
		payload: service
	}
}
export const toggleCall = (call) => {
	console.log(call)
	return {
		type: 'TOGGLE_CALL',
		payload: call
	}
}