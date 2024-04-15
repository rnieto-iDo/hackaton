import axios from "axios"

export interface IUserLogin {
	email: string
	password: string
	token?: string
}

export interface IRegisterUser {
	name: string
	email: string
	password: string
	password_confirmation: string
	gender: "male" | "female" | "other"
	role: "user" | "agency"
}

// name: string required
// name_juridical: string required
// cover: file required
// bio: string required
// logo: file required
// cedula: string required
// phone_number: string required
// address: string required
// email: string required
// bank_account: string required

export interface IRegisterAgency {
	name: string
	// legal name
	name_juridical: string
	// coverImg
	cover: File | HTMLImageElement
	// description
	bio: string
	logo: File | HTMLImageElement
	// personalID
	cedula: string
	phone_number: string
	address: string
	email: string
	password: string
	password_confirmation: string
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

export const registerAgency = async (props: IRegisterAgency) => {
	try {
		const response = await axios.post<IRegisterAgency>(
			`${import.meta.env.VITE_API_BASE_URL}/register`,
			props
		)
		return response
	} catch (error) {
		return error
	}
}
