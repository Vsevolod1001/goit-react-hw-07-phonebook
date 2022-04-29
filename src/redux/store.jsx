import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import { contactsApi } from './rtcQuery/rtcSlice';
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
