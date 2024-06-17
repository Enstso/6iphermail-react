import DevicesForm from "@/components/devices/devices-form";
import { Separator } from "@/components/ui/separator"

export default function Devices() {
  return (
    <div className="mx-auto">
      <div className="space-y-0.5 mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Devices</h2>
          <p className="text-muted-foreground">
            Manage your Devices.
          </p>
        </div>
        <Separator className="my-6" />
      <DevicesForm />
      <h4>To add another device, please enter this code.</h4>
    </div>
  );
}
