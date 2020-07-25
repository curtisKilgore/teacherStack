import { GET_CLASS } from '../actions/types';

const initialState = {
  classes: [],
  course: null,
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CLASS:
      return {
        ...state,
        course: payload,
        loading: false
      };

    default:
      return state;
  }
}
