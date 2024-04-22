import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook"
import { PageLayout } from "../../../Shared/Containers/pageLayout"
import { TRAVEL } from "../../../assets/mock"
import { setSelectedTravel } from "../Slices/travelsSlice"
import { ITravelDestination } from "../Utils/travelInterfaces"
import { SectionLayout } from "../../../Shared/Components/SectionLayout"
import { IDestination } from "../../destinations/Utils/destinationsInterfaces"
import { IconCalendarCheck, IconPhone, IconCoin } from "@tabler/icons-react"
import { capitalizeFirstLetter } from "../../../Shared/Utils/helper"

export const SingleTravel = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const selectedTravel = useAppSelector((state) => state.travels.selectedTravel)

    useEffect(() => {
        console.log(id);
        // dispatch(fetchSingleTravel(id))
        dispatch(setSelectedTravel(TRAVEL))
    }, []);

    return (
        <PageLayout pageName="">
            {
                selectedTravel && selectedTravel.destinations?.map((travelDestination: ITravelDestination) =>
                    <SectionLayout
                        key={travelDestination.id}
                        containerClassName="my-10 w-[75%]"
                        titleClassName="text-[20px] font-semibold font-onest"
                        title={travelDestination.destination}
                    >
                        <span className="flex items-center gap-2">
                            <i>
                                <IconCalendarCheck />
                            </i>
                            {`${travelDestination.arrival_date} - ${travelDestination.departure_date}`}
                        </span>
                        <ol className="relative m-10 ml-16 border-themePrimary/35 border-s">
                            <Itinerary
                                {...travelDestination}
                            />
                        </ol>
                    </SectionLayout>
                )
            }
        </PageLayout>
    )
}


export const Itinerary = ({ destinations }: ITravelDestination) => {
    const hotelDestinations = destinations.hotel.map((destination) => destination)
    const restaurantDestinations = destinations.restaurant.map((destination) => destination)
    const tourDestinations = destinations.tour.map((destination) => destination)

    const allDestinations = [...hotelDestinations, ...restaurantDestinations, ...tourDestinations]

    return (
        <>
            {
                allDestinations.map((destination: IDestination) => (
                    <ItineraryItem
                        key={destination.id}
                        {...destination}
                    />
                ))
            }
        </>
    )
}

export const ItineraryItem = (destination: IDestination) => {
    const { description, name, logo, type, phone_number, price } = destination;
    const formatedName = `${capitalizeFirstLetter(type)} ${name}`;

    return (
        <li className="mb-10 ml-16 ms-4">
            <img
                src={logo}
                className="absolute w-10 h-10 border border-gray-500 rounded-full -start-5"
            />
            <h3 className="mb-2 text-lg font-semibold text-pretty text-themebg2">
                {formatedName}
            </h3>
            <span className="flex items-center gap-1 mb-2 text-sm font-normal leading-none">
                <i>
                    <IconPhone size={18} />
                </i>
                {phone_number}
            </span>
            <p className="mb-4 text-base font-normal text-balance text-[#6A6A6A]">
                {description}
            </p>
            <span className="flex items-center gap-1 mb-4 text-sm font-normal leading-none">
                <i>
                    <IconCoin size={18} />
                </i>
                {price}
            </span>
            <Link
                to={`/destinations/${destination.id}`}
                className="inline-flex items-center justify-center px-6 py-2 text-xs font-semibold transition border rounded-sm text-themebg2 border-themebg hover:bg-themebg2 hover:text-themeOffwhite font-onest gap-x-2 hover:scale-105 bg-white/10"
            >
                Learn more
            </Link>


        </li>
    )
}