import { call, put, takeLatest } from "redux-saga/effects";
import {SUBMIT_CONTACT_REQUEST} from "./types";
import { submitContactApi } from "../../API/contactApi";
import {submitContactSuccess,submitContactFailure} from "./actions";

function* submitContactWorker(action) {
  try {
    const result = yield call(submitContactApi, action.payload);

    if (result.success) {
      yield put(submitContactSuccess(result.message));
    } else {
      yield put(submitContactFailure("Failed to store message"));
    }

  } catch (error) {
    yield put(submitContactFailure(error.message));
  }
}

export function* contactSaga() {
  yield takeLatest(SUBMIT_CONTACT_REQUEST, submitContactWorker);
}
