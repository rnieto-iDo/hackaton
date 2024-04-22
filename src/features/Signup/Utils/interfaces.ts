export type ProfileProps = {
	id: number
	name: string
	nationality: string
	date_of_birth: any
	photo: string | File
}

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
	role: "user" | "agency"
}

export interface IRegisterAgency {
	name: string
	name_juridical: string
	cover: string
	bio: string
	logo: string
	cedula: string
	phone_number: string
	address: string
	email: string
	bank_account: string
}
