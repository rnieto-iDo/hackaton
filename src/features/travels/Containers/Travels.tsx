import { useAppSelector } from '../../../Shared/App/hook'
import { PageLayout } from '../../../Shared/Containers/pageLayout'
import { TravelCard } from '../Components/TravelCard';

export const Travels = () => {
    const travels = useAppSelector((state) => state.travels.travels)

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