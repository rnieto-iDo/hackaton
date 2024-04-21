import { ICoordinate, IRequestStatus } from "../../../Shared/Utils/interfaces";

export interface IDestinationSlice {
  destinations: AllDestinations[];
  selectedDestination: IDestination;
  status: IRequestStatus;
  createdDestination?: IdestinationFormProps;
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
  price?: number | string;
  age_restriction: number;
  current_date?: string;
  gallery: string[];
  tags: ITag[];
}

export type Status = "closed" | "open";

export interface ITag {
  id: number;
  name: string;
}

export interface IDestinationProps extends IDestination {
  currentLocation: ICoordinate;
}

export interface IDestinationListProps {
  destinations: IDestination[];
  currentLocation: ICoordinate;
}

export interface AllDestinations {
  id: number;
  name: string;
  cover: string;
  logo: string;
  type: string;
  category: string;
  country: string;
  city: string;
  price: null | number;
  location: string;
  age_restriction: number;
}

export interface IAgencyProfileProps {
  logo: string;
  name: string;
  bio: string;
}

export interface IdestinationFormProps {
  id?: number;
  name: string;
  description: string;
  location: string;
  cover: File;
  address: string;
  logo: File;
  phone_number: string;
  city: string;
  state: string;
  country: string;
  type: string;
  category: string;
  status: string;
  age_restriction?: number;
}
export interface IGalleryItem {
  id: number;
  image: string;
}
