import { Credentials } from "./credentials";
import { Device } from "./device";

export class User {
    userId?: number;
    name = "";
    role = "";
    location = "";
    credentialsId?: number;
    credentials?: Credentials;
    deviceId?: number;
    bookedDevice?: Device;
    
}