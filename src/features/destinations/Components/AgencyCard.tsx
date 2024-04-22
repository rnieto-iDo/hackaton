import { SuperhostIcon } from "../../../assets/icons"
import { SectionLayout } from "../../../Shared/Components/SectionLayout"

const cardInfo = [
    {
        title: "711",
        subtitle: "opinions",
    },
    {
        title: "4.92",
        subtitle: "rating",
    },
    {
        title: "8",
        subtitle: "experience",
    },
]

export const AgencyCard = ({
    cover,
    name,
}: {
    cover: string
    name: string
}) => {
    return (
        <div className="flex w-full gap-3 p-5 shadow-lg font-onest bg-themeOffwhite rounded-3xl">
            <div className=" w-[60%] flex flex-col items-center justify-between gap-2">
                <img
                    className="w-[80%] rounded-full object-contain"
                    src={cover}
                    alt=""
                />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {name}
                    </h1>
                    <div className="flex items-center justify-center gap-1">
                        <SuperhostIcon />
                        <span className="text-[13px] p-0 m-0">Superhost</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-[40%]">
                {cardInfo.map((info, index) => (
                    <SectionLayout
                        key={index}
                        containerClassName={`flex flex-col w-[80%] ${index < cardInfo.length - 1 ? "border-b py-1" : "pt-1"
                            } border-solid border-[#DDD]`}
                        titleClassName="font-onest font-bold"
                        title={info.title}
                    >
                        <span className="text-[13px]">{info.subtitle}</span>
                    </SectionLayout>
                ))}
            </div>
        </div>
    )
}
