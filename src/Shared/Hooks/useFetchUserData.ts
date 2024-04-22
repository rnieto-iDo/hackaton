import { useEffect, useState } from "react"
import { getUserByToken } from "../Services"
import { AxiosResponse } from "axios"
import { setUser } from "../../features/Signup/Slices/UserSlice"
import { useDispatch } from "react-redux"

export function useFetchUserData(): string | null {
    const dispatch = useDispatch()
    const [userId, setUserId] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem("accessToken")
            if (token) {
                try {
                    const response = (await getUserByToken(token)) as AxiosResponse
                    if (response.status === 200) {
                        dispatch(setUser({ ...response.data, token: token }))
                    
                        setUserId(response.data.id)
                    } else {
                        window.location.href = "/login"
                    }
                } catch (error) {
                    console.error("Error fetching user:", error)
                    window.location.href = "/login"
                }
            }
        }

        fetchData()
    }, [dispatch])

    return userId
}