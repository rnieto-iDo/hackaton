import { IRequestStatus } from "../../../Shared/Utils/interfaces";
import { IDestination } from "../../destinations/Utils/destinationsInterfaces";

export interface ITravelSlice {
  travels: ITravelLite[];
  selectedTravel: ITravel;
  status: IRequestStatus;
}

export interface ITravelLite {
  id: number;
  status: string;
  origin: string;
  adults: number;
  children: number;
  pets: number;
  meta: IMeta[];
}

export interface IMeta {
  destination: string;
  arrival_date: string;
  departure_date: string;
}

export interface ITravel {
  id: number;
  status: string;
  origin: string;
  adults: number;
  children: number;
  pets: number;
  destinations: ITravelDestination[];
}

export interface ITravelDestination {
  id: number;
  destination: string;
  arrival_date: string;
  departure_date: string;
  destinations: Destinations;
}

export interface Destinations {
  hotel: IDestination[];
  restaurant: IDestination[];
  tour: IDestination[];
}
