import { useMemo, useState } from "react";

export default function useBooleanStateController(initialVal) {
  const [state, setstate] = useState(initialVal);

  const stateBooleanHandler = useMemo(
    () => ({
      setTrue: () => setstate(true),
      setFalse: () => setstate(false),
      setToggle: () => setstate((prevState) => !prevState),
    }),
    []
  );

  return [state, stateBooleanHandler];
}
