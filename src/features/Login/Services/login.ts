import axios from "axios"

export interface IUserLogin {
	email: string
	password: string
	token?: string
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
