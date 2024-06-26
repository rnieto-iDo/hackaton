export interface Destination {
  id:              number;
  name:            string;
  cover:           string;
  logo:            string;
  type:            string;
  category:        string;
  country:         string;
  city:            string;
  price:           null  | number;
  location:         string;
  age_restriction: number;
}
export interface IDestinationListProps {
  destinations: Destination[];
  currentLocation: ICoordinate;
}

export interface ICoordinate {
	latitude: number
	longitude: number
}

export interface IDestinationProps extends Destination {
  currentLocation: ICoordinate;
}
