import { useState } from "react"
import LoginForm from "../Components/LoginForm"
import RegisterFormUser from "../Components/RegisterFormUser"
import AgencyRegister from "./AgencyRegister"
import ProfileRegister from "./ProfileRegister"

export default function Signup() {
	const [isLogin, setIsLogin] = useState(true)
	const [isAgencyShown, setIsAgencyShown] = useState(false)
	const [isUserShown, setIsUserShown] = useState(false)

	return (
		<>
			{isAgencyShown && <AgencyRegister />}
			{isUserShown && <ProfileRegister />}
			{!isAgencyShown && !isUserShown && (
				<div className="w-full h-screen flex flex-col justify-center items-center bg-offwhite overflow-hidden">
					<div className="w-3/4 bg-themebg py-8 px-4">
						<span>logo</span>
						<div className="flex justify-center items-center gap-4 m-4">
							<button
								onClick={() => setIsLogin(!isLogin)}
								className={`${
									isLogin ? "border-b-2 border-b-primary" : "bg-gray-300"
								} px-4 py-2 rounded-l-md`}
							>
								Login
							</button>
							<button
								onClick={() => setIsLogin(!isLogin)}
								className={`${
									!isLogin
										? "border-b-2 border-b-primary  rounded-none"
										: "bg-gray-300"
								} px-4 py-2 rounded-r-md`}
							>
								Sign up
							</button>
						</div>

						<div className="">
							{isLogin ? (
								<LoginForm />
							) : (
								<RegisterFormUser
									setShowAgencyCallback={setIsAgencyShown}
									setShowUserCallback={setIsUserShown}
								/>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
