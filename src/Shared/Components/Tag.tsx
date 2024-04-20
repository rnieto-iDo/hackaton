import { iconSelector } from "../Utils/helper"
import { ITagProps } from "../Utils/interfaces"

export const Tag = ({ name, icon }: ITagProps) => {
	return (
		<div className="flex items-center gap-3 mt-2">
			<i>{iconSelector(icon)()}</i>
			<span className="text-gray-600 font-onest">{name}</span>
		</div>
	)
}
