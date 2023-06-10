import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Device } from '../models/device';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private url = "Device"
  constructor(private http: HttpClient) { }

  public getAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${environment.apiUrl}/${this.url}`);
  }
  public getDeviceById(id: number): Observable<Device> {
    return this.http.get<Device>(`${environment.apiUrl}/${this.url}/${id}`);
  }
  public createDevice(newDevice: Device): Observable<Device> {
    return this.http.post<Device>(`${environment.apiUrl}/${this.url}`, newDevice);
  }
  public updateDevice(updatedDevice: Device): Observable<Device> {
    return this.http.put<Device>(`${environment.apiUrl}/${this.url}`, updatedDevice);
  }
  public deleteDevice(id: number): Observable<Device[]> {
    return this.http.delete<Device[]>(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
