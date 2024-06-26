import { IdestinationFormProps } from "../../features/destinations/Utils/destinationsInterfaces"

export type IRequestStatus = "idle" | "loading" | "succeeded" | "failed"

export interface IPageLayoutProps {
	pageName: string
	children?: React.ReactNode
}

export interface ICoordinate {
	latitude: number
	longitude: number
}

export interface IColumnsConfig {
	xs?: number
	sm?: number
	md?: number
	lg?: number
}

export interface IMasonryLayoutProps {
	images: string[]
	columnsConfig: IColumnsConfig
}

export interface ISectionLayoutProps {
	children?: React.ReactNode
	containerClassName?: string
	titleClassName?: string
	title?: string
}

export interface ITagProps {
	id?: number
	name: string
	icon: string
}

export interface Iuser {
	id: number
	name: string
	email: string
	role: string
	token: string
	profileId?: number
}

export interface Iagency {
	id: number
	user_id: number
	name: string
	name_juridical: string
	cedula: string
	phone_number: string
	address: string
	email: string
	bank_account: string
	bio: string
	cover: string
	logo: string
	destinations: IdestinationFormProps[]
}
