import { createStore } from 'redux'

const initialStore = {
  activeHabits: 0,
}

const rootReducer = (state = initialStore, action) => {
  return state
}

export default createStore(rootReducer)