import axios from "axios"
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

export const setUserTags = async (props: ITagProps[]) => {
	const token = sessionStorage.getItem("accessToken")
	try {
		const response = await axios.post<ITagProps[]>(
			`${import.meta.env.VITE_API_BASE_URL}/profiles/{id}/tags`,
			props,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		console.log(response.data)
		return response.data
	} catch (error) {
		console.error("Error fetching tags:", error)
		throw error
	}
}
