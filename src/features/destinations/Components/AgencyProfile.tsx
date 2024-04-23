import { SectionLayout } from "../../../Shared/Components/SectionLayout"
import { IAgency } from "../../agencies/Utils/agenciesInterfaces"
import { AgencyCard } from "./AgencyCard"
import { AgencyInfo } from "./AgencyInfo"

export const AgencyProfile = ({ name, cover, address, bio }: IAgency) => {
    return (
        <>
            <div className="flex flex-col w-full md:w-[55%] gap-8">
                <AgencyCard
                    cover={cover}
                    name={name}
                />

                <AgencyInfo
                    address={address}
                    bio={bio}
                />
            </div>

            <div className="flex flex-col w-full md:w-[45%] h-full font-onest gap-5">

                <SectionLayout
                    containerClassName="flex flex-col gap-5"
                >
                    <span className="text-lg font-semibold">{name} is Superhost</span>
                    <p className="text-[15px] text-pretty">
                        Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                    </p>
                </SectionLayout>

                <SectionLayout
                    containerClassName="flex flex-col gap-5"
                >
                    <span className="text-lg font-semibold">Host information</span>
                    <div className="flex flex-col">
                        <span className="text-[15px]">
                            Response rate: 100%
                        </span>
                        <span className="text-[15px]">
                            Responds in less than one hour
                        </span>
                    </div>
                </SectionLayout>

                <button className="py-2 font-semibold rounded-md bg-themeText text-themeOffwhite">Write to the host</button>

                <SectionLayout
                    containerClassName="py-4 border-t border-solid border-[#DDD]"
                >
                    <p className="text-[13px] font-onest text-pretty">
                        In order to protect your payments, we ask that you never transfer money or communicate outside the site or application.
                    </p>
                </SectionLayout>

            </div>
        </>
    )
}
