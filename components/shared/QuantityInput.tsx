"use client";
import { Button } from "flowbite-react";
import { useState } from "react";

export default function QuantityInput({
  max,
  initial,
}: {
  max: number;
  initial: number;
}) {
  const [value, setValue] = useState(initial);
  const [maxValue, setMaxValue] = useState(max);

  const handleIncrement = () => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <Button pill color="gray" className="w-7 h-7 border-2" onClick={handleDecrement}>
          -
        </Button>
        <input
          type="text"
          className="text-black dark:text-white dark:bg-black w-[40px] h-7 text-center p-0 rounded-md"
          value={value}
          onChange={(e) => {setValue(Number(e.target.value))}}
        />
        <Button pill color="gray" className="w-7 h-7 border-2" onClick={handleIncrement}>
          +
        </Button>
      </div>
      <span><strong>{maxValue}</strong> units in stock </span>
    </div>
  );
}
