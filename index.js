const { createStore } = require('redux')

module.exports = (state, rules) => {
	const rootReducer = (state) => state 
	const store = createStore(rootReducer, state)

	return {
		store
	}
}
