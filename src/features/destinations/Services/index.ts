import axios, { AxiosResponse } from "axios"
import { PATH_LIST, createAxiosInstance } from "../../../Shared/Services"
import {
	IDestinationPriceProps,
	IdestinationFormProps,
} from "../Utils/destinationsInterfaces"

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

export const addGalleryToDestiny = async (
	props: {
		images: File[] | File
	},
	id: number
) => {
	const token = sessionStorage.getItem("accessToken")

	try {
		const response = await axios.post(
			`${import.meta.env.VITE_API_BASE_URL}/destinations/${id}/addGallery`,
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

export const addPriceToDestiny = async (
	props: IDestinationPriceProps | IDestinationPriceProps[],
	id: number
) => {
	const token = sessionStorage.getItem("accessToken")

	try {
		const response = await axios.post(
			`${import.meta.env.VITE_API_BASE_URL}/destinations/${id}/prices`,
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
