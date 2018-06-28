
import { fromJS } from 'immutable';

import { CREATE_MRF_ACTION , CREATE_MRF_FAILED_ACTION, CREATE_MRF_SUCCESS_ACTION} from './constant.js'

const INITIAL_STATE = fromJS({
  status:null,
  isLoading: true,
  error : null
});

function mrfReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CREATE_MRF_ACTION:
      return state.set('status', false)
        .set('error', null)
        .set('isLoading', true);
    case CREATE_MRF_SUCCESS_ACTION:
      return state.set('status', action.data.responseData)
                 .set('isLoading', false);      
    case CREATE_MRF_FAILED_ACTION:
      return state
        .set('error', action.data.responseData)
        .set('isLoading', false);
    default:
      return state
  }
}

export default mrfReducer;
 