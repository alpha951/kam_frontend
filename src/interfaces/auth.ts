import { UserRoles } from "@/types/types";

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
  