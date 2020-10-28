/* eslint-disable */

import React, { useEffect } from "react";
import axios from "axios";
import { ACTIONS } from "../../reducer";
import { useStateValue } from "../../Provider";

export default function useFatchData(params, page) {
  const [state, dispatch] = useStateValue();

  const BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
    return () => {
      cancelToken.cancel();
    };
  }, [params, page]);

  return state;
}
