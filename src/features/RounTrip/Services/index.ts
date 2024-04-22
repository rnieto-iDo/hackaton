import axios, { AxiosResponse } from "axios";
import { PATH_LIST, createAxiosInstance } from "../../../Shared/Services";

export const roundTrip2 = async (props: any) => {
  const token = sessionStorage.getItem("accessToken");

  // Configurar los encabezados de la petición con el token de autorización
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post<any>(
      `${import.meta.env.VITE_API_BASE_URL}/trip-request`,
      props,
      { headers }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const createRoundTrip = async (data: any): Promise<AxiosResponse> => {
  const axiosInstance = createAxiosInstance(
    // userDate
    `${PATH_LIST.ROUNDTRIP}`
  );

  const response = await axiosInstance.post("/", data);
  return response;
};
