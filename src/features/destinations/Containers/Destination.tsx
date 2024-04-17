import { useEffect, useRef } from "react"
import { PageLayout } from "../../../Shared/Containers/pageLayout"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../../Shared/App/hook"
import {
    fetchSingleAgency,
    resetAgencySelection,
} from "../../agencies/Slices/agenciesSlice"

export const Destination = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const currentLocationRef = useRef({ latitude: 0, longitude: 0 })

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            currentLocationRef.current = { latitude, longitude }
        })
    }

    useEffect(() => {
        dispatch(fetchSingleAgency(id ?? "0"))

        return () => {
            dispatch(resetAgencySelection())
        }
    }, [])

    return (
        <PageLayout pageName={`Destination`}>

        </PageLayout>
    )
}
