import { useEffect } from "react";
import { fetchAllAgencies } from "../Slices/agenciesSlice";
import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook";

import { PageLayout } from "../../../Shared/Containers/pageLayout";
import { Card } from "../Components/Card";
import { Link } from "react-router-dom";

export const Agencies = () => {
    const dispatch = useAppDispatch();
    const agencies = useAppSelector((state) => state.agencies.agencies);

    useEffect(() => {
        dispatch(fetchAllAgencies());
    }, []);

    return (
        <PageLayout pageName={"Agencies"}>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[32px]">
                {agencies.map((agency) => (
                    <Link
                        key={agency.id}
                        to={`/agencies/${agency.id}/destinations`}
                    >
                        <Card
                            key={agency.id}
                            {...agency}
                        />
                    </Link>
                ))}
            </div>
        </PageLayout>
    )
}