
import { CREATE_MRF_ACTION , 
  CREATE_MRF_SUCCESS_ACTION, 
  CREATE_MRF_FAILED_ACTION
} from './constant.js'

export function createMrfAction(data) {
  console.log(' i got trigger')
  return {
    type: CREATE_MRF_ACTION,
    data,
  };
}

export function createMrfSuccessAction(data) {
  console.log('hey successs action also listening')
  return {
    type: CREATE_MRF_SUCCESS_ACTION,
    data,
  };
}
  
export function createMrfFailedAction(error) {
  return {
    type: CREATE_MRF_FAILED_ACTION,
    error,
  };
}
  
 