import axios from "axios"
import {
	IRegisterAgency,
	IRegisterUser,
	ProfileProps,
} from "../Utils/interfaces"

export const login = async (email: string, password: string) => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_API_BASE_URL}/login`,
			{ email, password }
		)
		return response
	} catch (error) {
		return error
	}
}

export const registerUser = async (props: IRegisterUser) => {
	try {
		const response = await axios.post<IRegisterUser>(
			`${import.meta.env.VITE_API_BASE_URL}/register`,
			props
		)
		return response
	} catch (error) {
		return error
	}
}

export const registerAgency = async (props: any) => {
	const token = sessionStorage.getItem("accessToken")
	try {
		const response = await axios.post<IRegisterAgency>(
			`${import.meta.env.VITE_API_BASE_URL}/agencies`,
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

export const registerProfile = async (props: ProfileProps) => {
	const token = sessionStorage.getItem("accessToken")
	try {
		const response = await axios.post<ProfileProps>(
			`${import.meta.env.VITE_API_BASE_URL}/profiles`,
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
