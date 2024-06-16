import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
export default function DevicesForm() {
  const [code, setCode] = useState<number[]>([]);
  useEffect(() => {
    console.log("mounted");
    setCode([1, 2, 3, 4, 5, 6]);
    return () => {
      console.log("unmounted");
      setCode([]);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center space-x-2">
      {code.map((value, index) => (
        <Input key={index} className="w-9" value={value} disabled type="text" />
      ))}
    </div>
  );
}
