import { Component } from '@angular/core';
import { Device } from 'src/app/models/device'
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {
    devices: Device[] = [];
    deviceToEdit?: Device;

    constructor(private deviceService : DeviceService) {}

    ngOnInit() : void {
      this.deviceService.getAllDevices().subscribe((result : Device[]) => (this.devices = result));
    }

    newDevice() {
      this.deviceToEdit = new Device();
    }

    editDevice(device : Device) {
      this.deviceToEdit = device;
    }

    deleteDevice(device : Device) {
      if (device.deviceId)
      this.deviceService.deleteDevice(device.deviceId).subscribe((result : Device[]) => (this.devices = result));
    }

}
