import { CREATE_MESSAGE } from "../actions/types";

const inicial_state = {
  msg: {},
  status: null
};

export default function(state = inicial_state, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
