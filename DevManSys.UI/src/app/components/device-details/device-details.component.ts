import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent {

  @Input() device: Device | undefined;
  devices: Device[] = [];

  constructor (
    private router: ActivatedRoute, 
    private deviceService: DeviceService, 
    private location: Location) {}


  ngOnInit(): void {
    this.getDevice();
    this.getListDevices();
  }

  //HTTP request based functions
  getDevice() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.deviceService.getDeviceById(id).subscribe((result : Device) => (this.device = result));
  }

  getListDevices() {
    this.deviceService.getAllDevices().subscribe((result : Device[]) => (this.devices = result));
  }

  createDevice(newDevice: Device) {
    if (this.checkRequired(newDevice) && !this.checkAlreadyExisting(newDevice)) {
      this.deviceService.createDevice(newDevice).subscribe((result: Device) => this.device = result);
      window.location.reload();
    }
    else {
      window.alert("The device already exists or one of the fields is blank.")
    }
  }

  updateDevice(updateDevice: Device) {
    if (this.checkRequired(updateDevice)) {
    this.deviceService.updateDevice(updateDevice).subscribe((result: Device) => this.device = result);
    window.alert("The changes have been registered.")
    }
    else
     window.alert("One of the fields is blank.")
  }
  
  //navigation button
  goBack(): void {
    this.location.back();
  }

  //validation functions
  checkRequired( requirsCheckDev: Device): boolean {
    if (requirsCheckDev.name && 
      requirsCheckDev.type &&
      requirsCheckDev.manufacturer &&
      requirsCheckDev.operatingSystem &&
      requirsCheckDev.osVersion &&
      requirsCheckDev.processor &&
      requirsCheckDev.ramAmount &&
      requirsCheckDev.isAvailable) 
      { return true; }
    return false;
  }
    
  checkAlreadyExisting( alreadyExistingDev: Device): boolean {
    return this.devices.some(d =>
       d.name == alreadyExistingDev.name &&
      d.type == alreadyExistingDev.type &&
      d.manufacturer == alreadyExistingDev.manufacturer &&
      d.operatingSystem == alreadyExistingDev.operatingSystem &&
      d.osVersion == alreadyExistingDev.osVersion &&
      d.processor == alreadyExistingDev.processor &&
      d.ramAmount == alreadyExistingDev.ramAmount
    );
  }
}
