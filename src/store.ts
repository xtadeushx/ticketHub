import { configureStore } from '@reduxjs/toolkit'
import { eventsApi } from './modules/events/api/repository'
import { setupListeners } from '@reduxjs/toolkit/query';
import { eventDateReducer } from './modules/events/store/slice';

export const store = configureStore({
  reducer: {
    eventOrder : eventDateReducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(eventsApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);