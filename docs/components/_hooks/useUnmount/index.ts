import { useEffect } from "react";
import usePersistFn from "../usePersistFn/index";

const useUnmount = (
  fn: () => void
) => {
  const fnPersist = usePersistFn(fn);

  useEffect(
    // return function
    () => () => {
      typeof fnPersist === "function" && fnPersist();
    },
    []
  )
};

export default useUnmount;
