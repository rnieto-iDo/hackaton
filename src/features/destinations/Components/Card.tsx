import { StarIcon } from "../../../Shared/Assets/icons"
import useDistanceCalculator from "../../../Shared/Hooks/useDistanceCalculator";
import { ICoordinate } from "../../../Shared/Utils/interfaces";
import { IDestinationProps } from "../Utils/destinationsInterfaces"

export const Card = ({ id, name, country, city, cover, currentLocation, location }: IDestinationProps) => {
    const destination = `${name}, ${city}`;
    const destinationLocation: ICoordinate = {
        latitude: Number(location.split(",")[0]),
        longitude: Number(location.split(",")[1])
    }
    const distance = useDistanceCalculator(destinationLocation, currentLocation)

    return (
        <article key={id} className="flex flex-col gap-[10px]">
            <img className="w-full h-full rounded-2xl" src={cover} alt={name} />

            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <h1 className="w-[88%] overflow-hidden text-[15px] font-bold whitespace-nowrap text-ellipsis font-onest">{destination}</h1>

                    <div className="flex items-center justify-between gap-[4px] ">
                        <StarIcon />
                        <span className="font-onest">4.8</span>
                    </div>
                </div>

                <div className="flex flex-col font-onest">
                    <span className="text-sm text-[#707B8A]">{distance} KM away</span>
                    <span className="text-sm text-[#707B8A]">{country}</span>
                    <span className="mt-1 text-sm"><span className="font-semibold">$500 USD</span> per night</span>
                </div>

            </div>

        </article>
    )
}
