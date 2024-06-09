"use client";

import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrementCounter() {
    setCount((prev) => prev + 1);
  }

  function handleDecrementCounter() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div className="w-[72px] h-8 bg-base-button rounded-md flex items-center px-2 justify-between gap-1.5">
      <button onClick={handleDecrementCounter}>
        <Minus
          weight="bold"
          className="text-brand-purple hover:text-brand-purple-dark"
        />
      </button>
      <span className="text-base-title text-base">{count}</span>
      <button onClick={handleIncrementCounter}>
        <Plus
          weight="bold"
          className="text-brand-purple hover:text-brand-purple-dark"
        />
      </button>
    </div>
  );
}
