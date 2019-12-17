import { GET_ERRORS } from "../actions/types";

const inicial_state = {
  msg: {},
  status: null
};

export default function(state = inicial_state, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
}
