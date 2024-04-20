import { Button, Form, FormProps, Input } from "antd"
import { login } from "../Services/login"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setUser } from "../Slices/UserSlice"
import { useDispatch } from "react-redux"

type FieldType = {
	email: string
	password: string
	remember: boolean
}

export default function LoginForm() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [message, setMessage] = useState<string>("")

	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		const response = (await login(values.email, values.password)) as any

		if (response.status === 200) {
			sessionStorage.setItem("accessToken", response.data.token!)
			dispatch(setUser(response.data))
			navigate("/")
		} else if (response.response.status === 401) {
			setMessage("User not found with these credencials")
		} else {
			setMessage("something went wrong, please try again later")
		}
	}

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo)
	}

	return (
		<>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="on"
			>
				<Form.Item<FieldType>
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input a valid email!",
							type: "email",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item<FieldType>
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Login
					</Button>
				</Form.Item>
			</Form>
			<p>{message}</p>
		</>
	)
}
