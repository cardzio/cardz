const cardz = require('./index')

test('initializes store with initial game state', () => {
	const game = cardz({cards: []})
	const state = game.store.getState()

	expect(state.cards).toEqual([])
})