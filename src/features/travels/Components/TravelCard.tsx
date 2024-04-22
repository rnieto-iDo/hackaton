import { IconCalendarCheck, IconLego, IconLocation, IconMapPin, IconPaw, IconUser } from "@tabler/icons-react";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { ITravelLite } from "../Utils/travelInterfaces";
import { calculateDaysDifference } from "../../../Shared/Utils/helper";

export const TravelCard = ({ id, meta, pets, adults, children, origin }: ITravelLite) => {
    const arrivalDates = meta.map((destination) => destination.arrival_date);
    const departureDates = meta.map((destination) => destination.departure_date);
    const { daysDifference, minDate, maxDate } = calculateDaysDifference([...arrivalDates, ...departureDates])

    return (
        <article className="flex flex-col gap-[10px] w-[250px]">
            <div className="relative overflow-hidden">
                <Link
                    to={`/my-travels/${id}`}
                >
                    <img className="w-full h-full rounded-2xl" src={"https://via.placeholder.com/640x480.png/0088cc?text=consequuntur"} alt={"asd"} />
                </Link>
                <div className='gap-5 left-[55%] top-[80%] w-[25px] h-[25px] absolute inset-0 flex items-start justify-end font-bold text-themeOffwhite'>
                    <Tooltip title="Adults" className='flex items-center gap-1'>
                        <IconUser color='white' /> {adults}
                    </Tooltip>
                    <Tooltip title="Children" className='flex items-center gap-1'>
                        <IconLego color='white' /> {children}
                    </Tooltip>
                    <Tooltip title="Pets" className='flex items-center gap-1'>
                        <IconPaw color='white' /> {pets}
                    </Tooltip>
                </div>
            </div>

            <div className="flex flex-col font-onest gap-y-2">
                <span className="flex items-center gap-1 overflow-hidden text-sm whitespace-nowrap text-ellipsis">
                    <i>
                        <IconLocation size={20} />
                    </i>
                    {meta[0].destination}
                </span>
                <span className="flex items-center gap-1 overflow-hidden text-sm whitespace-nowrap text-ellipsis">
                    <i>
                        <IconMapPin size={20} />
                    </i>
                    {origin}
                </span>
                <Tooltip title={`${minDate} - ${maxDate}`} className='w-20'>
                    <span className="flex items-center gap-1 text-sm text-[#6A6A6A] overflow-hidden whitespace-nowrap text-ellipsis">
                        <i>
                            <IconCalendarCheck color="black" size={20} />
                        </i>
                        {daysDifference} days
                    </span>
                </Tooltip>
            </div>

        </article>
    )
}