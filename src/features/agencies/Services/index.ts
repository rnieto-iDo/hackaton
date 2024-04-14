import { AxiosResponse } from "axios"
import { PATH_LIST, createAxiosInstance } from "../../../Shared/Services"

export const fetchAgencies = async (): Promise<AxiosResponse> => {
	const axiosInstance = createAxiosInstance(
		// userData,
		`${PATH_LIST.AGENCIES}`
	)

	const response = await axiosInstance.get("")
	return response
}

export const fetchAgencyById = async (id: string): Promise<AxiosResponse> => {
	const axiosInstance = createAxiosInstance(
		// userData,
		`${PATH_LIST.AGENCIES}`
	)

	const response = await axiosInstance.get(`/${id}`)
	return response
}
