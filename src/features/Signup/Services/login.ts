import axios from "axios"

export interface IUserLogin {
	email: string
	password: string
	token?: string
}

export interface IRegister {
	name: string
	email: string
	password: string
	password_confirmation: string
	gender: "male" | "female" | "other"
	role: "user" | "agency"
}

export const login = async (email: string, password: string) => {
	try {
		const response = await axios.post<IUserLogin>(
			`${import.meta.env.VITE_API_BASE_URL}/login`,
			{ email, password }
		)
		return response
	} catch (error) {
		return error
	}
}

export const register = async (props: IRegister) => {
	try {
		const response = await axios.post<IRegister>(
			`${import.meta.env.VITE_API_BASE_URL}/register`,
			props
		)
		return response
	} catch (error) {
		return error
	}
}
