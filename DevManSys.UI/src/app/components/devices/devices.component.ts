import { Component } from '@angular/core';
import { Device } from 'src/app/models/device'
import { User } from 'src/app/models/user';
import { DeviceService } from 'src/app/services/device.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {
    devices: Device[] = [];
    users: User[] = [];
    deviceToEdit?: Device;

    constructor(private deviceService : DeviceService, private userService : UserService) {}

    ngOnInit() : void {
      this.deviceService.getAllDevices().subscribe((result : Device[]) => (this.devices = result));
      this.userService.getAllUsers().subscribe((result : User[]) => (this.users = result));
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



    searchDeviceUser(deviceId? : number) {
      var deviceUser = this.users.find((user : User) => user.deviceId == deviceId);
      return deviceUser?.name;
    }

}
