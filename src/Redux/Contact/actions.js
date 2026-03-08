import {
  SUBMIT_CONTACT_REQUEST,
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_FAILURE
} from "./types";

export const submitContactRequest = (payload) => ({
  type: SUBMIT_CONTACT_REQUEST,
  payload,
});

export const submitContactSuccess = (message) => ({
  type: SUBMIT_CONTACT_SUCCESS,
  message,
});

export const submitContactFailure = (error) => ({
  type: SUBMIT_CONTACT_FAILURE,
  error,
});
