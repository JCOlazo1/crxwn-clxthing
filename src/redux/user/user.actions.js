import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER, // KEYNOTE: this is a call to the 'user.reducer.jsx'
  payload: user
})