
import { useEffect, useRef, useState } from "react";
import { PageLayout } from "../../../Shared/Containers/pageLayout";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook";
import { fetchSingleAgency, resetAgencySelection } from "../../agencies/Slices/agenciesSlice";
import { Card } from "../Components/Card";

export const Destinations = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const selectedAgency = useAppSelector((state) => state.agencies.selectedAgency);
    const currentLocationRef = useRef({ latitude: 0, longitude: 0 });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            currentLocationRef.current = { latitude, longitude };
        });
    }

    useEffect(() => {
        dispatch(fetchSingleAgency(id ?? "0"));

        return () => {
            dispatch(resetAgencySelection());
        }
    }, []);


    return (
        <PageLayout pageName={`${selectedAgency.name} Destinations`}>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[32px]">
                {selectedAgency.destinations.map((destination) => (
                    <Card
                        key={destination.id}
                        {...destination}
                        currentLocation={currentLocationRef.current}
                    />
                ))}
            </div>
        </PageLayout>
    )
}