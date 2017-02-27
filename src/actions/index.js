export const selectService = (service) => {
	console.log(service.title)
	return {
		type: 'SERVICE_SELECTED',
		payload: service
	}
}