import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tattooReducer from './reducers/tattoo/tattoo-slice.ts';
import cartReducer from './reducers/cart/cart-slice.ts';

const rootReducer = combineReducers({
	tattooReducer,
	cartReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
