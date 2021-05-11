import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// eslint-disable-next-line
export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  )

  return persistedReducer
}