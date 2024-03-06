"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// what it should be send to the context(similar to props)
interface ContextValue {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

// alternative to props
const CountContext = createContext({} as ContextValue);
// a way to send out the context
function CountProvider(props: PropsWithChildren) {
  const [count, setCount] = useState(0);
  // write the add, remove, update functions here

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {props.children}
    </CountContext.Provider>
  );
}

// a way to capture it in the components(to receive  context data  in the components)
export const useCount = () => useContext(CountContext);
export default CountProvider;
