export const initialState = {
  user: null,
  jobs: [],
  loading: true,
  error: false,
};

export const ACTIONS = {
  SET_USER: "set-user",
  MAKE_RQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const reducer = (state, action) => {
  console.log("action yoooo", action);
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jobs,
      };
    case ACTIONS.MAKE_RQUEST:
      return {
        laoding: true,
        jobs: [],
      };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jobs,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        job: [],
      };
    default:
      return state;
  }
};

export default reducer;
