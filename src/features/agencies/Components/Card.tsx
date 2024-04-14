import { IAgencies } from "../Utils/agenciesInterfaces"

export const Card = ({ id, name, logo }: IAgencies) => {
    return (
        <article key={id} className="relative overflow-hidden shadow-lg rounded-2xl">
            <img className="w-full h-full" src={logo} alt={name} />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                <h4 className="p-4 text-sm font-normal text-white font-onest">{name}</h4>
            </div>
        </article>
    )
}
