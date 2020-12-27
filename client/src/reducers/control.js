import { 
  ADD_CONTROL, 
  GET_CONTROL,
  GET_FAIL,
  ADD_FAIL
} from '../actions/types';

const initialState = {
  gpio: null,
  loading: true,
  error: {}
};

export default function control(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTROL:
      return {
        ...state,
        gpio: payload,
        loading: false
      }
    case GET_CONTROL:
      return {
        ...state,
        gpio: payload,
        loading: false
      }
    case GET_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case ADD_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  } 
 }