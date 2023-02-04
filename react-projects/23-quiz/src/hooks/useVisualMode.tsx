import { useState } from 'react';

export enum ModeEnum {
  SETUP = 'SETUP',
  LOADING = 'LOADING',
  QUESTION = 'QUESTION',
}
function useVisualMode() {
  const [mode, setMode] = useState(ModeEnum.SETUP);

  function transition(newMode: ModeEnum) {
    setMode(newMode);
  }

  return {
    mode,
    transition,
  };
}

export default useVisualMode;
