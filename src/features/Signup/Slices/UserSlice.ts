import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Iuser } from "../../../Shared/Utils/interfaces"

interface UserState {
	user: Iuser | null
}

const initialState: UserState = {
	user: null,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<Iuser>) => {
			state.user = action.payload
		},
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
