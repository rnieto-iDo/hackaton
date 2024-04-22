import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Iagency, Iuser } from "../../../Shared/Utils/interfaces"
import { ProfileProps } from "../Utils/interfaces"

type IUserSlice = {
	user: Iuser
	profile: ProfileProps
	agency: Iagency
}

const initialState: IUserSlice = {
	user: {
		id: 0,
		name: "",
		email: "",
		role: "",
		token: "",
	},
	profile: {
		id: 0,
		name: "",
		nationality: "",
		date_of_birth: "",
		photo: "",
	},

	agency: {
		id: 0,
		user_id: 0,
		name: "",
		name_juridical: "",
		cedula: "",
		phone_number: "",
		address: "",
		email: "",
		bank_account: "",
		bio: "",
		cover: "",
		logo: "",
		destinations: [],
	},
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<Iuser>) => {
			state.user = action.payload
		},
		setProfile: (state, action: PayloadAction<ProfileProps>) => {
			state.profile = action.payload
		},
		setAgency: (state, action: PayloadAction<Iagency>) => {
			state.agency = action.payload
		},
	},
})

export const { setUser, setProfile, setAgency } = userSlice.actions

export const userReducer = userSlice.reducer
