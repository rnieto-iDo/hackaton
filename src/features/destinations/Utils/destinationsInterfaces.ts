import { ICoordinate, IRequestStatus } from "../../../Shared/Utils/interfaces";

export interface IDestinationSlice {
  destinations: IDestination[];
  selectedDestination: IDestination;
  status: IRequestStatus;
}

export interface IDestination {
  id: number;
  agency_id: number;
  agency_name: string;
  name: string;
  description: string;
  location: string;
  address: string;
  phone_number: string;
  cover: string;
  logo: string;
  city: string;
  country: string;
  state: string;
  type: string;
  category: string;
  status: Status;
  age_restriction: number;
  gallery: string[];
  tags: ITag[];
}

export enum Status {
  Closed = "closed",
  Open = "open",
}

export interface ITag {
  id: number;
  name: string;
}

export interface IDestinationProps extends IDestination {
  currentLocation: ICoordinate;
}
