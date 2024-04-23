import axios, { AxiosResponse } from "axios"
import { ITagProps } from "../../../Shared/Utils/interfaces"

export const getTags = async () => {
	const token = sessionStorage.getItem("accessToken")
	try {
		const response = await axios.get<ITagProps[]>(
			`${import.meta.env.VITE_API_BASE_URL}/tags`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "multipart/form-data",
				},
			}
		)
		return response.data
	} catch (error) {
		console.error("Error fetching tags:", error)
		throw error
	}
}
export const setUserTags = async (
	props: any,
	id: number
): Promise<AxiosResponse<ITagProps[]>> => {
	const token = sessionStorage.getItem("accessToken")
	const tags = {
		tags: props,
	}

	try {
		const response = await axios.post<ITagProps[]>(
			`${import.meta.env.VITE_API_BASE_URL}/profiles/${id}/tags`,
			tags,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		return response
	} catch (error) {
		console.error("Error fetching tags:", error)
		throw error
	}
}

export const setDestinationTags = async (
	props: any,
	id: number
): Promise<AxiosResponse<ITagProps[]>> => {
	const token = sessionStorage.getItem("accessToken")
	const tags = {
		tags: props,
	}

	try {
		const response = await axios.post<ITagProps[]>(
			`${import.meta.env.VITE_API_BASE_URL}/destinations/${id}/tags`,
			tags,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		return response
	} catch (error) {
		console.error("Error fetching tags:", error)
		throw error
	}
}
