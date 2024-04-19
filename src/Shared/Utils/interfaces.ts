export type IRequestStatus = "idle" | "loading" | "succeeded" | "failed";

export interface IPageLayoutProps {
  pageName: string;
  children?: React.ReactNode;
}

export interface ICoordinate {
  latitude: number;
  longitude: number;
}

export interface IColumnsConfig {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export interface IMasonryLayoutProps {
  images: string[];
  columnsConfig: IColumnsConfig;
}

export interface ISectionLayoutProps {
  children?: React.ReactNode;
  containerClassName?: string;
  titleClassName?: string;
  title?: string;
}

export interface ITagProps {
  title: string;
  icon: string;
}
