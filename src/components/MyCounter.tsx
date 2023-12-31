import { useState } from "react";

export interface Props {
  value?: number;
}

export function MyCounter({ value = 0 }: Props) {
  const [counter, setCounter] = useState(value);

  const onMinus = () => {
    setCounter((prev) => prev - 1);
  };

  const onPlus = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className="text-red-700">Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  );
}
