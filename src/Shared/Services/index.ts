import axios, { AxiosInstance } from "axios";

export enum PATH_LIST {
  AGENCIES = "/agencies",
  PROFILES = "/profiles",
}

export interface IUserData {
  jwtToken: string;
}

export const createAxiosInstance = (
  userData: IUserData,
  PATH?: string
): AxiosInstance => {
  const baseURL = `${import.meta.env.VITE_API_BASE_URL as string}${PATH}`;
  console.log("baseurl", baseURL);

  const headers = {
    Authorization: `Bearer ${userData.jwtToken}`,
    "Content-Type": "application/json",
  };

  const clientAxios = axios.create({
    baseURL,
    headers,
  });

  return clientAxios;
};
