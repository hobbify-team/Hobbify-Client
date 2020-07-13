const INITIAL_STATE = {
  routinesPublic: [],
  routinesPrivate: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "get_routines_private":
      return { ...state, routinesPrivate: action.payload };
    case "add_routine_private":
      return { ...state, ...action.payload };
    case "delete_routine_private":
      return { ...state, routinesPrivate: action.payload };
    case "pause_routine_private":
      return { ...state, ...action.payload };
    case "get_routines_public":
      return { ...state, routinesPublic: action.payload };
    default:
      return state;
  }
};
