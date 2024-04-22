import { useEffect } from "react"
import { getUserByToken } from "../Services"
import { AxiosResponse } from "axios"
import { setUser } from "../../features/Signup/Slices/UserSlice"
import { useDispatch } from "react-redux"

export function useFetchUserData() {
	const dispatch = useDispatch()
	let userID
	useEffect(() => {
		const fetchData = async () => {
			const token = sessionStorage.getItem("accessToken")
			if (token) {
				try {
					const response = (await getUserByToken(token)) as AxiosResponse
					if (response.status === 200) {
						dispatch(setUser({ ...response.data, token: token }))
						userID = response.data.id
					} else {
						window.location.href = "/login"
					}
				} catch (error) {
					console.error("Error fetching user:", error)
					window.location.href = "/login"
				}
			} else {
				userID = null
			}
		}

		fetchData()
	}, [dispatch, history])
	return userID
}
