import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { getData, urls } from "@/lib/utils";
export default function DevicesForm() {
  const [code, setCode] = useState<number[]>([]);
  useEffect(() => {
    getData(urls.generateAuthCode).then((data) => {
      setCode(data.code.toString().split("").map(Number));
    });
    return () => {
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
