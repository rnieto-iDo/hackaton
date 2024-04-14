export type IRequestStatus = "idle" | "loading" | "succeeded" | "failed";

export interface IPageLayoutProps {
  pageName: string;
  children?: React.ReactNode;
}

export interface ICoordinate {
  latitude: number;
  longitude: number;
}
