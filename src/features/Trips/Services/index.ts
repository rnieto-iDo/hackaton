import axios from "axios";

export const tripRequest = async (props: any) => {
  const token = sessionStorage.getItem("accessToken");

  // Configurar los encabezados de la petición con el token de autorización
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post<any>(
      `${import.meta.env.VITE_API_BASE_URL}/trip`,
      props,
      { headers }
    );
    return response;
  } catch (error) {
    return error;
  }
};
