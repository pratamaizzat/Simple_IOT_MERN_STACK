import {
  ADD_CONTROL,
  GET_CONTROL,
  GET_FAIL
} from './types';

import api from '../utils/api';

export const getControl = () => async dispatch => {
  try {
    const response = await api.get('/control/gpio');

    dispatch({
      type: GET_CONTROL,
      payload: response.data
    });
  } catch (err) {
    const errors = err.response.data.error;
    dispatch({
      type: GET_FAIL,
      payload: {
        message: errors.title,
        status: errors.code
      }
    });
  }
};

export const addControl = (formData) => async dispatch => {
 try {
   const response = await api.post('/control/gpio', formData);

   dispatch({
      type: ADD_CONTROL,
      payload: response.data    
   });
 } catch (err) {
  const errors = err.response.data.error;
  dispatch({
    type: GET_FAIL,
    payload: {
      message: errors.title,
      status: errors.code
    }
  });
 } 
};