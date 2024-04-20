import { Button, Form, FormProps, Input, Select } from "antd"
import { registerUser } from "../Services/login"
import { setUser } from "../Slices/UserSlice"
import { useState } from "react"
import { Option } from "antd/es/mentions"
import { AxiosResponse } from "axios"
import { useDispatch } from "react-redux"

type FieldType = {
	name: string
	email: string
	password: string
	password_confirmation: string
	gender: "male" | "female" | "other"
	role: "user" | "agency"
}

type RegisterFormUserProps = {
	setShowAgencyCallback: (value: boolean) => void
	setShowUserCallback: (value: boolean) => void
}
export default function RegisterFormUser({
	setShowAgencyCallback,
	setShowUserCallback,
}: RegisterFormUserProps) {
	const dispatch = useDispatch()
	const [message, setMessage] = useState<string>("")

	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		const response = (await registerUser(values)) as AxiosResponse
		if (response.status === 200) {
			sessionStorage.setItem("accessToken", response.data.token!)
			dispatch(setUser(response.data))
			if (values.role === "agency") {
				setShowAgencyCallback(true)
			} else {
				setShowUserCallback(true)
			}
		} else if (response.status === 422) {
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
				<p className="text-themePrimary font-semibold">{message}</p>

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
					name="role"
					label="User"
					rules={[{ required: true, message: "Please select a role" }]}
				>
					<Select placeholder="select your Role">
						<Option value="user">Traveler</Option>
						<Option value="agency">Agency</Option>
					</Select>
				</Form.Item>
				<div className="flex justify-center items-center">
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Register
						</Button>
					</Form.Item>
				</div>
			</Form>
		</>
	)
}
