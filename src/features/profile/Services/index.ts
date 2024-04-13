import { AxiosResponse } from "axios";
import { PATH_LIST, createAxiosInstance } from "../../../Shared/Services";

export const fetchProfiles = async (): Promise<AxiosResponse> => {
  const axiosInstance = createAxiosInstance(
    // userData,
    `${PATH_LIST.PROFILES}`
  );

  const response = await axiosInstance.get("/");
  return response;
};
