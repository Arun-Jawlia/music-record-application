import React from "react";
import * as types from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  music_records: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MUSIC_RECORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MUSIC_RECORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        music_records: payload,
      };

    case types.GET_MUSIC_RECORD_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
