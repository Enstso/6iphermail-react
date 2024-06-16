import DevicesForm from "@/components/devices/devices-form";
export default function Devices() {
  return (
    <div className="mx-auto">
      <h1 className="text-xl">Code</h1>
      <DevicesForm />
      <h4>To add another device, please enter this code.</h4>
    </div>
  );
}
