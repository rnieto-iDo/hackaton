import { AxiosResponse } from "axios";
import { PATH_LIST, createAxiosInstance } from "../../../Shared/Services";

export const fetchProfiles = async (id: string): Promise<AxiosResponse> => {
  const axiosInstance = createAxiosInstance(`${PATH_LIST.PROFILES}`);

  const response = await axiosInstance.get(`/${id}`);
  return response;
};
