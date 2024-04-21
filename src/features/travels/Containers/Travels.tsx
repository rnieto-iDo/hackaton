import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../Shared/App/hook'
import { PageLayout } from '../../../Shared/Containers/pageLayout'
import { setSelectedTravel } from '../Slices/travelsSlice'
import { TRAVEL } from '../../../assets/mock'

export const Travels = () => {
    const dispatch = useAppDispatch()
    const travels = useAppSelector((state) => state.travels.travels)

    const onSelect = (id: number) => {
        console.log('Selected Travel Id:', id);
        dispatch(setSelectedTravel(TRAVEL))
    }

    return (
        <PageLayout pageName='My Travels'>
            <div>
                {travels.map((travel) => (
                    <Link
                        key={travel.id}
                        className='w-[30%]'
                        to={`/my-travels/${travel.id}`}
                    >
                        <div className='py-7'
                            onClick={() => onSelect(travel.id)}
                        >
                            <h2>{travel.origin}</h2>
                            <p>Adults: {travel.adults}</p>
                            <p>Children: {travel.children}</p>
                            <p>Pets: {travel.pets}</p>
                            <ul>
                                {travel.meta.map((destination) => (
                                    <li key={destination.destination}>
                                        <h3>{destination.destination}</h3>
                                        <p>Arrival: {destination.arrival_date}</p>
                                        <p>Departure: {destination.departure_date}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Link>
                ))}
            </div>
        </PageLayout>
    )
}
