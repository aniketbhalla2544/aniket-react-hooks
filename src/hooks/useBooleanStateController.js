import { useMemo, useState } from "react";

export default function useBooleanStateController(initialVal) {
  const [state, setstate] = useState(initialVal);

  const stateBooleanHandler = useMemo(
    () => ({
      setBooleanStateTrue: () => setstate(true),
      setBooleanStateFalse: () => setstate(false),
      toggleBooleanState: () => setstate((prevState) => !prevState),
    }),
    []
  );

  return [state, stateBooleanHandler];
}