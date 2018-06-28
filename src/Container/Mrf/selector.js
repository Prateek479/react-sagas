
import { createSelector } from 'reselect';

const selectMrf = state => state.get('mrf');


const selectLoading = () =>
  createSelector(selectMrf, mrf => mrf.toJS()['isLoading']);

const selectStatus = () =>
  createSelector(selectMrf, mrf => mrf.toJS()['status']);

const selectError = () =>
  createSelector(selectMrf, mrf => mrf.toJS()['error']);


export { 
  selectStatus,
  selectLoading,
  selectError,
};
