import React, { useState } from "react";
function useToggle(initialValue: boolean = true) {
  const [state, setState] = useState<boolean>(initialValue);
  const toggle = () => setState((prev) => !prev);
  return [state, toggle] as const;
}
export default useToggle;
