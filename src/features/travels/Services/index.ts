import axios, { AxiosResponse } from "axios";
import { PATH_LIST, createAxiosInstance } from "../../../Shared/Services";

const UNSPLASH_URL = import.meta.env.VITE_API_UNSPLASH_URL as string;
const ACCESS_KEY = import.meta.env.VITE_API_UNSPLASH_ACCESS_KEY as string;

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

export const fetchImageByCity = async (city: string) => {
  try {
    const response = await axios.get(UNSPLASH_URL, {
      params: {
        query: city,
        per_page: 1,
        page: 1,
        client_id: ACCESS_KEY,
      },
    });
    const firstImage = response.data.results[0];
    return firstImage.urls.regular;
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
  }
};
