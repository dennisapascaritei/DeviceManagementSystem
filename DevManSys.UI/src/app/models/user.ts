import { Device } from "./device";

export class User {
    UserId?: number;
    name = "";
    role = "";
    location = "";
    email = "";
    password = "";
    bookedDevice?: Device;
    isAvailable = true;
}