import { Button, Form, FormProps, Input, Select } from "antd"
import { useState } from "react"
import { Option } from "antd/es/mentions"

import { useNavigate } from "react-router-dom"
import { registerAgency } from "../Services/login"

type FieldType = {
	name: string
	name_juridical: string
	cover: File
	bio: string
	logo: File
	cedula: string
	phone_number: string
	address: string
	email: string
	password: string
	password_confirmation: string
	role: "user" | "agency"
}

export default function ARegister() {
	const navigate = useNavigate()
	const [message, setMessage] = useState<string>("")

	const onFinish: FormProps<FieldType>["onFinish"] = async (
		values: FieldType
	) => {
		const response = (await registerAgency(values)) as any
		console.log(response, "response")

		if (response.status === 200) {
			sessionStorage.setItem("accessToken", response.data.token!)
			navigate("/")
		} else if (response.response && response.response.status === 422) {
			setMessage(
				"Email already exists, please try again with a different email"
			)
		} else {
			setMessage("Something went wrong, please try again later")
		}
	}

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo)
	}

	return (
		<>
			<span>logo</span>
			<Form
				name="signUpForm"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{
					maxWidth: 600,
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
					label="Agency Name"
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
					label="Legal Name"
					name="name_juridical"
					rules={[
						{
							required: true,
							message: "Please input enter a legal name!",
							type: "string",
						},
					]}
				>
					<Input />
				</Form.Item>
				{/* <Form.Item<FieldType> label="Cover" name="cover">
					<Dragger {...props}>
						<p className="ant-upload-drag-icon">
							<InboxOutlined />
						</p>
						<p className="ant-upload-text">
							Click or drag file to this area to upload
						</p>
						<p className="ant-upload-hint">
							Support for a single or bulk upload. Strictly prohibited from
							uploading company data or other banned files.
						</p>
					</Dragger>
				</Form.Item> */}

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
