import { Button, Checkbox, Form, FormProps, Input } from "antd"
import { IUserLogin, login } from "../Services/login"
import { setUser } from "../Slices/UserSlice"

type FieldType = {
	email: string
	password: string
	remember: boolean
}

type ApiResponse = {
	data: IUserLogin
	status: number
}

interface ILoginForm {
	messageCallback: (message: string) => void
}

export default function LoginForm({ messageCallback }: ILoginForm) {
	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		const response = (await login(values.email, values.password)) as ApiResponse

		if (response.status === 200) {
			messageCallback("success")
			sessionStorage.setItem("accessToken", response.data.token!)
			setUser(response.data)
		} else {
			messageCallback("error")
		}
	}

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo)
	}

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
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

			<Form.Item<FieldType>
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}
