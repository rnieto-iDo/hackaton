import { LanguageIcon, LocationIcon } from '../../../assets/icons'

export const AgencyInfo = ({ address, bio }: { address: string, bio: string }) => {
    return (
        <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-2">
                <LanguageIcon />
                <span className="font-onest">Languages: English and Spanish</span>
            </div>

            <div className="flex items-start gap-2">
                <i>
                    <LocationIcon />
                </i>
                <span className="font-onest">Location: {address}</span>
            </div>

            <div className="mt-5 font-onest">
                <p className="text-pretty">
                    {bio}
                </p>
                <span className="font-semibold underline">Show more</span>
            </div>

        </div>
    )
}
