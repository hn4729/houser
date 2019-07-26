import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: 0,
  image_url: "",
  monthly_mortgage: 0,
  desired_mortgage: 0
};

export const CLEAR = "CLEAR";
export const UPDATE_STEP_ONE = "UPDATE_STEP_ONE";
export const UPDATE_STEP_TWO = "UPDATE_STEP_TWO";
export const UPDATE_STEP_THREE = "UPDATE_STEP_THREE";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_STEP_ONE:
      return {
        ...state,
        name: payload.name,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zipcode: payload.zipcode
      };
    case UPDATE_STEP_TWO:
      return {
        ...state,
        image_url: payload
      };
    case UPDATE_STEP_THREE:
      return {
        ...state,
        monthly_mortgage: payload.monthly_mortgage,
        desired_mortgage: payload.desired_mortgage
      };
    case CLEAR:
      return {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: 0,
        image_url: "",
        monthly_mortgage: 0,
        desired_mortgage: 0
      };
    default:
      return state;
  }
}

export default createStore(reducer);
