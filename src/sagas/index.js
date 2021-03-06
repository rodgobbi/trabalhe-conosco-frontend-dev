import { all, fork } from 'redux-saga/effects';
import api from './api';

export default function* () {
  yield all([
    fork(api),
  ]);
}
