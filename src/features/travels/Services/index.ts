import { AxiosResponse } from "axios";
import { PATH_LIST, createAxiosInstance } from "../../../Shared/Services";

export const fetchTrips = async (profileId: number): Promise<AxiosResponse> => {
  const axiosInstance = createAxiosInstance(`${PATH_LIST.PROFILES}`);

  const response = await axiosInstance.get(`/${profileId}/trips`);
  return response;
};

export const fetchTripById = async (
  profileId: number,
  tripId: number
): Promise<AxiosResponse> => {
  const axiosInstance = createAxiosInstance(`${PATH_LIST.PROFILES}`);

  const response = await axiosInstance.get(`/${profileId}/trips/${tripId}`);
  return response;
};
