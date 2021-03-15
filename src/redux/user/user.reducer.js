import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
  currentUser: null
}

// In essence: if the action does not trigger a change, do nothing/return the same state as is.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default userReducer;