import { IAgency } from "../Utils/agenciesInterfaces"

export const Card = ({ id, name, logo }: IAgency) => {
    return (
        <article key={id} className="relative overflow-hidden rounded-2xl shadow-lg">
            <img className="w-full h-full" src={logo} alt={name} />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                <h4 className="font-onest font-normal text-sm p-4">{name}</h4>
            </div>
        </article>
    )
}
