import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Shared/App/hook'
import { PageLayout } from '../../../Shared/Containers/pageLayout'
import { TravelCard } from '../Components/TravelCard';
import { fetchAllTrips } from '../Slices/travelsSlice';

export const Travels = () => {
    const dispatch = useAppDispatch()
    const travels = useAppSelector((state) => state.travels.travels)
    const profileId = useAppSelector((state) => state.profile.profiles.id)

    useEffect(() => {
        dispatch(fetchAllTrips({ profileId }));
    }, []);

    return (
        <PageLayout pageName='My Travels'>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[32px]">
                {travels.map((travel) => (
                    <TravelCard
                        key={travel.id}
                        {...travel}
                    />
                ))}
            </div>
        </PageLayout>
    )
}