import { useEffect, useState } from "react"
import { ITagProps } from "../../../Shared/Utils/interfaces"
import { ITagTypeProps } from "../Utils/interfaces"
import {
	getTags,
	setDestinationTags,
	setUserTags,
} from "../Services/tagsHelper"
import { Button } from "antd"
import TagSkeleton from "./TagSkeleton"
import { useAppSelector } from "../../../Shared/App/hook"
import { useNavigate } from "react-router-dom"

export default function Tags({ type, showGalleryFrom }: ITagTypeProps) {
	const navigate = useNavigate()
	const [tags, setTags] = useState<ITagProps[]>([])
	const [selectedTags, setSelectedTags] = useState<ITagProps[]>([])
	const [isLoading, setIslLoading] = useState(true)

	const profile = useAppSelector((state) => state.user.profile)
	const createdDestination = useAppSelector(
		(state) => state.destinations.createdDestination
	)

	const handleTagSubmit = async () => {
		const tagIds = selectedTags.map((tag) => tag.id)

		if (type === "user") {
			try {
				const response = await setUserTags(tagIds, profile.id)
				if (response.status === 200) {
					console.log("Tags set successfully")
					navigate("/")
				}
			} catch (error) {
				console.error("Error setting tags:", error)
			}
		} else {
			try {
				const response = await setDestinationTags(
					tagIds,
					createdDestination!.id!
				)
				if (response.status === 200) {
					if (showGalleryFrom) {
						showGalleryFrom(true)
					}
				}
			} catch (error) {
				console.error("Error setting tags:", error)
			}
		}
	}
	const handleTagSelection = (index: number) => {
		const tagToToggle = tags[index]
		const isSelected = selectedTags.some((tag) => tag.id === tagToToggle.id)
		setSelectedTags((prevSelectedTags) => {
			if (isSelected) {
				return prevSelectedTags.filter((tag) => tag.id !== tagToToggle.id)
			} else {
				return [...prevSelectedTags, tagToToggle]
			}
		})
	}

	useEffect(() => {
		const fetchData = async () => {
			const tags = await getTags()

			if (tags) {
				setTags(tags)
				setIslLoading(!isLoading)
			}
		}
		fetchData()
	}, [])

	return (
		<div className="w-full h-screen flex flex-col overflow-y-scroll bg-themeOffwhite  items-center justify-evenly z-10 px-4 ">
			<div className="">
				{type === "user" ? (
					<h1 className="text-themeText font-semibold text-2xl my-10 text-center">
						Craft Your Adventure: What Are You Looking for in a Destination?
					</h1>
				) : (
					<h1 className="text-text font-semibold text-2xl my-10 text-center">
						Craft Your Destination: What Tags suit you destination?
					</h1>
				)}
			</div>
			<div
				className={`flex flex-wrap gap-2 px-2 max-h-[400px] overflow-y-scroll ${
					isLoading ? "animate-pulse" : "animate-none"
				}`}
			>
				{isLoading ? (
					<TagSkeleton />
				) : (
					<>
						{tags.map((tag, index) => (
							<div
								key={index}
								className={`flex items-center gap-2 px-2 py-1 rounded-full text-sm font-medium text-text cursor-pointer transition-colors border border-themePrimary ${
									selectedTags.some((selectedTag) => selectedTag.id === tag.id)
										? " bg-themePrimary "
										: " bg-themeOffwhite border border-themePrimary"
								}`}
								onClick={() => handleTagSelection(index)}
							>
								<img src={tag.icon} alt={tag.name} className="w-4 h-4 ml-2" />
								<span className="text-center text-sm font-normal ">
									{tag.name}
								</span>
							</div>
						))}
					</>
				)}
			</div>

			<Button
				type="primary"
				className="w-full mt-4"
				onClick={handleTagSubmit}
				shape="round"
			>
				Finish
			</Button>
		</div>
	)
}
