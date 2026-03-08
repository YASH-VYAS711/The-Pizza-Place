import { all } from "redux-saga/effects";
import { contactSaga } from "./Contact/saga";

export default function* rootSaga() {
  yield all([contactSaga()]);
}
