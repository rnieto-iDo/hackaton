import axios, { AxiosInstance } from "axios"

export enum PATH_LIST {
	AGENCIES = "/agencies",
	PROFILES = "/profiles",
	DESTINATIONS = "/destinations",
}
export interface IUserData {
	jwtToken: string
}

export const createAxiosInstance = (
	// userData: IUserData,
	PATH?: string
): AxiosInstance => {
	const baseURL = `${import.meta.env.VITE_API_BASE_URL as string}${PATH}`

	const token = sessionStorage.getItem("accessToken")
	const headers = {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	}

	const clientAxios = axios.create({
		baseURL,
		headers,
	})

	return clientAxios
}

export const getUserByToken = async (token: string) => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_API_BASE_URL}/getUserByToken`,
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
