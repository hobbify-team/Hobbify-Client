const INITIAL_STATE = {
  usuario: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "login":
      return { ...state, usuario: action.payload };

    case "get_info_user":
      return { ...state, usuario: action.payload };

    case "update_info_user":
      return { ...state, usuario: action.payload };
    default:
      return state;
  }
};
