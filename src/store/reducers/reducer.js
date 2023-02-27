const INITIAL_STATE = {
  episodes: null,
  charecters: null
}

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_EPISODES":
      return {
        ...state,
        episodes: action.episodes,
      }

    case "SET_CHARACTERS":
      return {
        ...state,
        charecters: action.charecters,
      }

    default:
      return state
  }
}
