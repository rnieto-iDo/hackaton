import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUserLogin } from "../Utils/interfaces"

interface UserState {
	user: IUserLogin | null
}

const initialState: UserState = {
	user: null,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUserLogin>) => {
			state.user = action.payload
		},
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
