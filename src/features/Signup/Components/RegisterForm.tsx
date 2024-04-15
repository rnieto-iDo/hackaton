import { Button, Form, FormProps, Input, Select } from "antd"
import { register } from "../Services/login"
import { setUser } from "../Slices/UserSlice"
import { useState } from "react"
import { Option } from "antd/es/mentions"
import { useNavigate } from "react-router-dom"

type FieldType = {
	name: string
	email: string
	password: string
	password_confirmation: string
	gender: "male" | "female" | "other"
	role: "user" | "agency"
}

export default function RegisterForm() {
	const navigate = useNavigate()
	const [message, setMessage] = useState<string>("")

	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		const response = (await register(values)) as any
		console.log(response, "response")

		if (response.status === 200) {
			sessionStorage.setItem("accessToken", response.data.token!)
			setUser(response.data)
			navigate("/")
		} else if (response.response.status === 422) {
			setMessage(
				"Email already exists, please try again with a different email"
			)
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
				name="signUpForm"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{
					maxWidth: 600,
					maxHeight: 300,
					paddingInline: "1rem",
					overflowY: "scroll",
					overflowX: "hidden",
				}}
				initialValues={{}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="on"
			>
				<p className="text-primary font-semibold">{message}</p>

				<Form.Item<FieldType>
					label="Name"
					name="name"
					rules={[
						{
							required: true,
							message: "Please input an username!",
							type: "string",
						},
					]}
				>
					<Input />
				</Form.Item>
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
				<Form.Item<FieldType>
					name="password_confirmation"
					label="Confirm Password"
					dependencies={["password"]}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please confirm your password!",
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve()
								}
								return Promise.reject(
									new Error("The new password that you entered do not match!")
								)
							},
						}),
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item<FieldType>
					name="gender"
					label="Gender"
					rules={[{ required: true, message: "Please select gender!" }]}
				>
					<Select placeholder="select your gender">
						<Option value="male">Male</Option>
						<Option value="female">Female</Option>
						<Option value="other">Other</Option>
					</Select>
				</Form.Item>

				<Form.Item<FieldType>
					name="role"
					label="User"
					rules={[{ required: true, message: "Please select a role" }]}
				>
					<Select placeholder="select your Role">
						<Option value="user">Traveler</Option>
						<Option value="agency">Agency</Option>
					</Select>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Register
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
