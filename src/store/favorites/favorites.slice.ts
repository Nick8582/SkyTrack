import { createSlice } from '@reduxjs/toolkit'

const LS_KEY = 'favorites'

const getFavoritesFromLocalStorage = () => {
	const favorites = localStorage.getItem(LS_KEY)

	if (!favorites) return []

	try {
		return JSON.parse(favorites)
	} catch (err) {
		console.error('Error parsing favorites from localStorage: ', err)
		return []
	}
}

const saveFavoritesToLocalStorage = (favorites: string[]) => {
	localStorage.setItem(LS_KEY, JSON.stringify(favorites))
}

const initialState: string[] = getFavoritesFromLocalStorage()

const favoritesSlice = createSlice({
	name: LS_KEY,
	initialState,
	reducers: {
		addFavorites: (state, action) => {
			if (!state.includes(action.payload)) {
				state.push(action.payload)
				saveFavoritesToLocalStorage(state)
			}
		},
		removeFavorites: (state, action) => {
			const index = state.indexOf(action.payload)
			if (index > -1) {
				state.splice(index, 1)
				saveFavoritesToLocalStorage(state)
			}
		}
	}
})

export const { addFavorites, removeFavorites } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
