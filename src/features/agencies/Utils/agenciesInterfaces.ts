import { IRequestStatus } from "../../../Shared/Utils/interfaces";

export interface IAgenciesSlice {
  agencies: IAgency[];
  status: IRequestStatus;
}

export interface IAgency {
  id: number;
  name: string;
  logo: string;
  cover: string;
}
