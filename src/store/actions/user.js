import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from './actionTypes'


export const loggedIn = () => {
  return {
    type: USER_LOGGED_IN
  }
}

export const loggedOut = () => {
  return {
    type: USER_LOGGED_OUT
  }
}