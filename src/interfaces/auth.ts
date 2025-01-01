import { UserRoles } from "@/types/types";
import exp from "constants";

export interface LoginApiRequestData {
    mobile: string;
    password: string;
}

export interface LoginApiResponseData {
    token: string;
    userId: string;
    name: string;
    mobile: string;
    role: UserRoles;
    email: string;
}
  