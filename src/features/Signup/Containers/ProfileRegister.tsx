import { useState } from "react"
import { ProfileProps } from "../Utils/interfaces"
import { Button, DatePicker, Form, FormProps, Input, Select } from "antd"
import { registerProfile } from "../Services/login"
import { countries } from "../Utils/countries"
import { ITagTypeProps } from "../../tags/Utils/interfaces"
import { AxiosResponse } from "axios"
import { useDispatch } from "react-redux"
import { setProfile } from "../Slices/UserSlice"

const dateFormat = "YYYY/MM/DD"

type ProfileRegisterProps = {
	setIsTagShown: (value: boolean) => void
	setTagType: (value: ITagTypeProps) => void
}

const filterOption = (
	input: string,
	option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())

export default function ProfileRegister({
	setIsTagShown,
	setTagType,
}: ProfileRegisterProps) {
	const dispatch = useDispatch()
	const [profilePictureState, setProfilePicture] = useState<File>()
	const [meesageState, setMessageState] = useState<string>("")

	const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return
		const selectedFile = event.target.files[0]
		if (selectedFile) {
			setProfilePicture(selectedFile)
		}
	}

	const onFinish: FormProps<ProfileProps>["onFinish"] = async (
		values: ProfileProps
	) => {
		const formValues = {
			...values,
			photo: profilePictureState!,

			date_of_birth: values.date_of_birth.format("YYYY-MM-DD"),
		}

		const response = (await registerProfile(formValues)) as AxiosResponse

		if (response.status === 201) {
			dispatch(setProfile(response.data))
			setTagType({ type: "user" })
			setIsTagShown(true)
		} else {
			setMessageState("Something went wrong, please try again later")
		}
	}

	const onFinishFailed: FormProps<ProfileProps>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo)
	}

	return (
		<div className="w-full h-screen flex flex-col overflow-y-scroll bg-themebg items-center justify-evenly z-10">
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
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="on"
				encType="multipart/form-data"
			>
				<p className="text-themePrimary font-semibold">{meesageState}</p>

				<h1 className="text-text font-semibold text-2xl my-10">
					Create Your Profile
				</h1>

				<Form.Item<ProfileProps>
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

				<Form.Item<ProfileProps>
					label="Profile Picture"
					name="photo"
					rules={[
						{
							required: true,
							message: "Please enter photo",
							type: "string",
						},
					]}
				>
					<input type="file" onChange={handleProfileChange} />
				</Form.Item>

				<Form.Item<ProfileProps>
					label="Nacionality"
					name="nationality"
					rules={[
						{
							required: true,
							message: "Please input your nacionality!",
							type: "string",
						},
					]}
				>
					<Select
						showSearch
						placeholder="Select a country"
						optionFilterProp="children"
						filterOption={filterOption}
						options={countries.map((country) => ({
							label: country,
							value: country,
						}))}
					/>
				</Form.Item>

				<Form.Item<ProfileProps>
					label="Date of Birth"
					name="date_of_birth"
					rules={[{ required: true, message: "Please input!" }]}
				>
					<DatePicker format={dateFormat} />
				</Form.Item>

				<div className="flex justify-center items-center">
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Register
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	)
}
