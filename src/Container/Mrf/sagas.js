import { call, put, all, takeLatest } from 'redux-saga/effects';
import { callCreateMrf } from '../../Utils/apis';
import { CREATE_MRF_ACTION } from './constant'
import { createMrfSuccessAction,
    createMrfFailedAction
} from './actions';

export function* createMrf({ data }) {
    const responseData = yield call(callCreateMrf, data);
    if(responseData.status) {
       yield put(
         createMrfSuccessAction({
           responseData: responseData.data
         })
       ); 
      } else {
        yield put(
            createMrfFailedAction({
            responseData: responseData.Message
          })
        );
      }
}

export function* mrfData() {
  yield all([takeLatest(CREATE_MRF_ACTION, createMrf)]);
}

export default [mrfData];
