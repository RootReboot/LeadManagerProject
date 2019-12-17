import { GET_MESSAGES, CREATE_MESSAGE } from "../actions/types";

const inicial_state = {
  msg: {},
  status: null
};

export default function(state = inicial_state, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
}
