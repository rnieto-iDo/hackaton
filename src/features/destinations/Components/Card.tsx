import { useState } from "react";
import { FavoriteIcon, StarIcon } from "../../../Shared/Assets/icons"
import useDistanceCalculator from "../../../Shared/Hooks/useDistanceCalculator";
import { ICoordinate } from "../../../Shared/Utils/interfaces";
import { IDestinationProps } from "../Utils/destinationsInterfaces"

import { Carousel, ConfigProvider } from 'antd';
import { Link } from "react-router-dom";
import { setSelectedDestination } from "../Slices/destinationsSlice";
import { useDispatch } from "react-redux";

export const Card = (destination: IDestinationProps) => {
    const { id, name, country, city, logo, cover, currentLocation, location } = destination

    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const destinationName = `${name}, ${city}`;
    const destinationLocation: ICoordinate = {
        latitude: Number(location.split(",")[0]),
        longitude: Number(location.split(",")[1])
    }
    const distance = useDistanceCalculator(destinationLocation, currentLocation)
    const carouselImages = [logo, cover]

    const handleOnSelectDestination = () => {
        dispatch(setSelectedDestination(destination))
    }

    return (
        <article key={id} className="flex flex-col gap-[10px]">
            <ConfigProvider
                theme={{
                    components: {
                        Carousel: {
                            dotHeight: 6,
                            dotWidth: 6,
                            dotActiveWidth: 6,
                        }
                    }
                }}
            >
                <div className="relative overflow-hidden">
                    <Carousel>
                        {
                            carouselImages.map((image, index) => (
                                <Link
                                    key={index}
                                    onClick={handleOnSelectDestination}
                                    to={`/destinations/${id}`}
                                >
                                    <img key={index} className="w-full h-full rounded-2xl" src={image} alt={name} />
                                </Link>
                            ))
                        }
                    </Carousel>
                    <button
                        className="left-[87%] top-3 w-[25px] h-[25px] absolute inset-0 flex items-start justify-end"
                        onClick={() => setIsFavorite(!isFavorite)}
                    >
                        <FavoriteIcon isFavorite={isFavorite} />
                    </button>
                </div>
            </ConfigProvider>

            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <h1 className="w-[85%] overflow-hidden text-[15px] font-bold whitespace-nowrap text-ellipsis font-onest">{destinationName}</h1>

                    <div className="flex items-center justify-between gap-[4px] ">
                        <StarIcon />
                        <span className="text-sm font-onest">4.8</span>
                    </div>
                </div>

                <div className="flex flex-col font-onest">
                    <span className="text-sm text-[#6A6A6A]">{distance} KM away</span>
                    <span className="text-sm text-[#6A6A6A]">{country}</span>
                    <span className="mt-1 text-sm text-[#6A6A6A]"><span className="font-semibold text-[#000]">$500 USD</span> per night</span>
                </div>

            </div>

        </article>
    )
}
