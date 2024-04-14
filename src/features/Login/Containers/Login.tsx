import { useState } from "react"
import LoginForm from "../Components/LoginForm"

export default function Login() {
	const [message, setMessage] = useState<string | null>(null)
	return (
		<div className="w-full h-screen flex flex-col justify-center items-center">
			<div className="form__container bg-offwhite">
				<LoginForm messageCallback={setMessage} />
				{message && <div className="w-full flex justify-center">{message}</div>}
			</div>
		</div>
	)
}
