import { useEffect } from "react"

import { PageLayout } from "../../../Shared/Containers/pageLayout"
import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook"
import MasonryLayout from "../../../Shared/Components/MasonryLayout"
import { tagList } from "../../../assets/mock"

import {
    fetchSingleDestination,
    resetDestinationSelection,
} from "../Slices/destinationsSlice"
import { useParams } from "react-router-dom"
import { Map } from "../../../Shared/Components/Map"
import { ICoordinate } from "../../../Shared/Utils/interfaces"
import { SectionLayout } from "../../../Shared/Components/SectionLayout"
import { Tag } from "../../../Shared/Components/Tag"
import { capitalizeFirstLetter, trimPunctuation } from "../../../Shared/Utils/helper"
import { fetchSingleAgency } from "../../agencies/Slices/agenciesSlice"
import { IDestination } from "../Utils/destinationsInterfaces"
import { AgencyProfile } from "../Components/AgencyProfile"

export const Destination = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const selectedDestination = useAppSelector(
        (state) => state.destinations.selectedDestination
    )
    const selectedAgency = useAppSelector(
        (state) => state.agencies.selectedAgency
    )
    const { gallery, city, location, description, type, country, state } = selectedDestination

    const destinationLocation: ICoordinate = {
        latitude: Number(location.split(",")[0]),
        longitude: Number(location.split(",")[1]),
    }

    useEffect(() => {
        dispatch(fetchSingleDestination(id ?? "0")).then((res) => {
            const resPayload = res.payload as IDestination

            if (resPayload) {
                dispatch(fetchSingleAgency(resPayload.agency_id.toString()))
            }
        })

        return () => {
            dispatch(resetDestinationSelection())
        }
    }, [])

    return (
        <PageLayout pageName={`${trimPunctuation(selectedDestination.name)} - ${city}`}>
            {gallery && gallery.length > 0 && (
                <MasonryLayout
                    images={gallery.slice(0, 6)}
                    columnsConfig={{ xs: 1, sm: 2, md: 3, lg: 3 }}
                />
            )}

            <SectionLayout
                containerClassName="w-[60%] my-4"
                titleClassName="text-[20px] font-semibold font-onest"
                title={`${capitalizeFirstLetter(type)} in ${state}, ${country}`}
            >
                <p className="font-onest">2 guests <span> · </span>1 bedroom <span> · </span>1 bed <span> · </span>1 shared bathroom</p>
            </SectionLayout>

            <div className="flex flex-col justify-between w-full gap-10 lg:flex-row">
                <SectionLayout containerClassName="w-full">
                    <SectionLayout containerClassName="py-2 w-full border-t border-solid border-[#DDD] font-onest text-pretty">
                        <p className="pt-7">{description}</p>
                        <button className="font-semibold underline">Show more</button>
                    </SectionLayout>

                    <SectionLayout
                        containerClassName="mt-10 py-12 w-full border-t border-solid border-[#DDD]"
                        titleClassName="text-[20px] font-semibold font-onest"
                        title="What this place offers"
                    >
                        <div className="grid grid-cols-[repeat(2,minmax(200px,1fr))] gap-4 my-8">
                            {tagList.slice(0, 8).map((tag, index) => (
                                <Tag key={index} name={tag.name} icon={tag.icon} />
                            ))}
                        </div>
                        {tagList.length > 8 && (
                            <button className="px-4 py-2 border border-solid rounded-md font-onest">
                                Show all {tagList.length} services
                            </button>
                        )}
                    </SectionLayout>
                </SectionLayout>

                <SectionLayout containerClassName="flex flex-col md:flex-row w-full bg-[#f0efe9] rounded-3xl p-8 gap-5 h-full">
                    <AgencyProfile
                        {...selectedAgency}
                    />
                </SectionLayout>
            </div >

            <SectionLayout
                containerClassName="font-onest mt-5 py-12 border-y border-solid border-[#DDD]"
                titleClassName="text-[20px] font-semibold mb-3"
                title="Where are you going to be"
            >
                <span>{`${city}, ${state}, ${country}`}</span>
                <div className="mt-8">
                    <Map
                        latitude={destinationLocation.latitude}
                        longitude={destinationLocation.longitude}
                    />
                </div>
            </SectionLayout>
        </PageLayout >
    )
}
