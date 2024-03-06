"use client";

import { useCount } from "./CountProvider";

interface Props {
  step: number;
}

export default function CountButton(props: Props) {
  const { count, setCount } = useCount();
  return (
    <button
      className='p-4 bg-slate-400 m-4 font-semibold'
      onClick={() => setCount(count + props.step)}
    >
      Change Count with: {props.step}
    </button>
  );
}
