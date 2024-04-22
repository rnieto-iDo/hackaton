import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../Shared/App/hook"
import { Avatar, Button } from "antd"
import { EditOutlined, TagOutlined, CompassOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { fetchProfileById } from "../Slices/profileSlice"
import { useFetchUserData } from "../../../Shared/Hooks/useFetchUserData"
const Profile = () => {
	useFetchUserData()
	const dispatch = useAppDispatch()
	const profile = useAppSelector((state) => state.profile.profiles)
	const profileID = useAppSelector((state) => state.user.user.profileId)

	useEffect(() => {
		dispatch(fetchProfileById(profileID!))
	}, [profileID])
	return (
		<section>
			<div className="p-4 m-4 bg-gradient-to-r from-pink-500 to-violet-600 rounded-3xl ">
				<div className="flex flex-col items-center justify-center w-full ">
					<Avatar
						size={150}
						src={`${import.meta.env.VITE_ASSETS_BASE_URL}${profile.photo}`}
					/>

					<div className="mt-8 text-center">
						<h1 className="text-2xl font-bold text-white text Center">
							{profile.name}
						</h1>
						<p className="text-xl font-semibold text-white text Center">
							{profile.nationality}
						</p>
						<p className="text-lg text-white text Center font-regular">
							{profile.date_of_birth}
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 px-4">
				<Link to={`/my-travels`}>
					<Button type="primary" shape="round" icon={<CompassOutlined />} block>
						My Travels
					</Button>
				</Link>
				<Button type="primary" shape="round" icon={<EditOutlined />} block>
					Edit Profile
				</Button>
				<Button type="primary" shape="round" icon={<TagOutlined />} block>
					Edit Your Preferences
				</Button>
			</div>
		</section>
	)
}

export default Profile
