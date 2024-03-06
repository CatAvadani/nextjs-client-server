"use client";

import { useState } from "react";

export default function CountButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      className='p-4 bg-slate-400 m-4 font-semibold'
      onClick={() => setCount(count + 1)}
    >
      Click Count: {count}
    </button>
  );
}
