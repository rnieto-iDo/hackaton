import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Iuser } from "../../../Shared/Utils/interfaces"
import { ProfileProps } from "../Utils/interfaces"

type IUserSlice = {
	user: Iuser
	profile: ProfileProps
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
		photo: new File([], ""),
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
	},
})

export const { setUser, setProfile } = userSlice.actions

export const userReducer = userSlice.reducer
