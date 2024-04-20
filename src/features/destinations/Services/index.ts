import axios, { AxiosResponse } from "axios"
import { PATH_LIST, createAxiosInstance } from "../../../Shared/Services"
import { IdestinationFormProps } from "../Utils/destinationsInterfaces"

export const fetchDestinationById = async (
	id: string
): Promise<AxiosResponse> => {
	const axiosInstance = createAxiosInstance(`${PATH_LIST.DESTINATIONS}`)

	const response = await axiosInstance.get(`/${id}`)
	return response
}

export const fetchDestinations = async (): Promise<AxiosResponse> => {
	const axiosInstance = createAxiosInstance(`${PATH_LIST.DESTINATIONS}`)

	const response = await axiosInstance.get("")
	return response
}

export const registerDestination = async (props: IdestinationFormProps) => {
	const token = sessionStorage.getItem("accessToken")

	try {
		const response = await axios.post<IdestinationFormProps>(
			`${import.meta.env.VITE_API_BASE_URL}/destinations`,
			props,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "multipart/form-data",
				},
			}
		)
		return response
	} catch (error) {
		return error
	}
}
