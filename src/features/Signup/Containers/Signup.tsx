import { useState } from "react"
import LoginForm from "../Components/LoginForm"
import RegisterForm from "../Components/RegisterForm"

export default function Signup() {
	const [isLogin, setIsLogin] = useState(true)

	return (
		<div className="w-full h-screen flex flex-col justify-center items-center bg-offwhite">
			<div className="w-3/4 bg-themebg py-8 px-4">
				<span>logo</span>
				<div className="flex justify-center items-center gap-4 m-4">
					<button
						onClick={() => setIsLogin(true)}
						className={`${
							isLogin ? "border-b-2 border-b-primary" : "bg-gray-300"
						} px-4 py-2 rounded-l-md`}
					>
						Login
					</button>
					<button
						onClick={() => setIsLogin(false)}
						className={`${
							!isLogin
								? "border-b-2 border-b-primary  rounded-none"
								: "bg-gray-300"
						} px-4 py-2 rounded-r-md`}
					>
						Sign up
					</button>
				</div>

				<div className="">{isLogin ? <LoginForm /> : <RegisterForm />}</div>
			</div>
		</div>
	)
}
