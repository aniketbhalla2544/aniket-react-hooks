import { useEffect, useRef } from "react";

export default function useInititalRender() {
  const isItInitialRender = useRef(true);

  useEffect(() => {
    if (isItInitialRender) {
      isItInitialRender.current = false;
    }
  }, []);

  return isItInitialRender.current;
}