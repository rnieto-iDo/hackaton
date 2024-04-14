import { AxiosResponse } from "axios";
import {
  IUserData,
  PATH_LIST,
  createAxiosInstance,
} from "../../../Shared/Services";

export interface Profile {
  id: string;
  userData: IUserData;
}

export const fetchProfiles = async (data: Profile): Promise<AxiosResponse> => {
  const { id, userData } = data;
  const axiosInstance = createAxiosInstance(userData, `${PATH_LIST.PROFILES}`);

  const response = await axiosInstance.get(`/${id}`);
  return response;
};
