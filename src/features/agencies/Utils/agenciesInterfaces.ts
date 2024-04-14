import { IRequestStatus } from "../../../Shared/Utils/interfaces";
import { IDestination } from "../../destinations/Utils/destinationsInterfaces";

export interface IAgenciesSlice {
  agencies: IAgencies[];
  selectedAgency: IAgency;
  status: IRequestStatus;
}

export interface IAgencies {
  id: number;
  name: string;
  logo: string;
  cover: string;
}

export interface IAgency {
  id: number;
  user_id: number;
  name: string;
  name_juridical: string;
  cedula: string;
  phone_number: string;
  address: string;
  email: string;
  bank_account: string;
  bio: string;
  cover: string;
  logo: string;
  destinations: IDestination[];
}
