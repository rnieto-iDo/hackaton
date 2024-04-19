import { IDestinationListProps } from "../Utils/destinationsInterfaces"
import { Card } from "./Card"

export const DestinationList = ({ destinations, currentLocation }: IDestinationListProps) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[32px]">
            {destinations.map((destination) => (
                <Card
                    key={destination.id}
                    {...destination}
                    currentLocation={currentLocation}
                />
            ))}
        </div>
    )
}
