import {
  SUBMIT_CONTACT_REQUEST,
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_FAILURE
} from "./types";

const initialState = {
  loading: false,
  successMessage: "",
  errorMessage: "",
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_CONTACT_REQUEST:
      return { ...state, loading: true, errorMessage: "", successMessage: "" };

    case SUBMIT_CONTACT_SUCCESS:
      return { ...state, loading: false, successMessage: action.message };

    case SUBMIT_CONTACT_FAILURE:
      return { ...state, loading: false, errorMessage: action.error };

    default:
      return state;
  }
}
