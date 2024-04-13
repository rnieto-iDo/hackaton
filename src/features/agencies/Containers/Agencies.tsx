import { useEffect } from "react";
import { fetchAllAgencies } from "../Slices/agenciesSlice";
import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook";
import { Card } from "../Components/Card";

export const Agencies = () => {
    const dispatch = useAppDispatch();
    const agencies = useAppSelector((state) => state.agencies.agencies);

    useEffect(() => {
        dispatch(fetchAllAgencies());
    }, []);

    return (
        <section className="p-10">
            <h1 className="font-onest text-4xl font-semibold capitalize py-5">Agencies</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[32px]">
                {agencies.map((agency) => (
                    <Card
                        key={agency.id}
                        {...agency}
                    />
                ))}
            </div>
        </section>
    )
}