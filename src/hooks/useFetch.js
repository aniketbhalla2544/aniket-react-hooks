import { useEffect, useRef, useState } from "react";

const RESPONSE_STATUS = Object.freeze({
  IS_LOADING: "isLoading",
  IS_ERROR: "isError",
  LOADING_COMPLETED: "loadingCompleted"
});

export default function useFetch(url = "") {
  const [data, setData] = useState(null);
  const errorMessage = useRef("");
  const [responseStatus, setResponseStatus] = useState("");
  const isLoading = responseStatus === RESPONSE_STATUS.IS_LOADING;
  const isError = responseStatus === RESPONSE_STATUS.IS_ERROR;

  useEffect(() => {
    async function fetchData() {
      setResponseStatus(RESPONSE_STATUS.IS_LOADING);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setResponseStatus(RESPONSE_STATUS.LOADING_COMPLETED);
      } catch (error) {
        setResponseStatus("isError");
        errorMessage.current = error.message;
      }
    }
    url && fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    isError,
    errorMessage
  };
}
