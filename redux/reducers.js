import { GET_USERS } from "./actions";

// initial state as an empty array for the fetched data which will be changing

const initialState = {
  users: []
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload};
    default:
      return state;
  }
}

export default userReducer;