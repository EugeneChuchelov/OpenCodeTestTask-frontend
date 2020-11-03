import {UserRoleEnum} from "./user-role-enum.model";

export class User {
  username: string;
  role: UserRoleEnum;
  forms: number[];
}
