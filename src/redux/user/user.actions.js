export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER', // KEYNOTE: this is a call to the 'user.reducer.jsx'
  payload: user
})