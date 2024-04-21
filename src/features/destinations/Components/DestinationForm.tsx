import { useState } from "react"
import { ITagTypeProps } from "../../tags/Utils/interfaces"
import Tags from "../../tags/Components/Tags"
import { Button, Form, FormProps, Input, Select } from "antd"
import { IdestinationFormProps } from "../Utils/destinationsInterfaces"
import { registerDestination } from "../Services"
import { AxiosResponse } from "axios"
import TextArea from "antd/es/input/TextArea"
import { countries } from "../../Signup/Utils/countries"
import { useDispatch } from "react-redux"
import { setCreatedDestination } from "../Slices/destinationsSlice"

export default function DestinationForm() {
	const [isTagShown, setIsTagShown] = useState(false)
	const [tagType, setTagType] = useState<ITagTypeProps>({ type: "agency" })

	const [meesageState, setMeesageState] = useState<string>("")

	const [coverState, setCover] = useState<File>()
	const [logoState, setLogo] = useState<File>()

	const dispatch = useDispatch()

	const filterOption = (
		input: string,
		option?: { label: string; value: string }
	) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())

	const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return
		const selectedFile = event.target.files[0]
		if (selectedFile) {
			setCover(selectedFile)
		}
	}

	const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return
		const selectedFile = event.target.files[0]
		if (selectedFile) {
			console.log(selectedFile)

			setLogo(selectedFile)
		}
	}

	const onFinish: FormProps<IdestinationFormProps>["onFinish"] = async (
		values: IdestinationFormProps
	) => {
		const formValues: IdestinationFormProps = {
			...values,
			cover: coverState!,
			logo: logoState!,
		}

		const response = (await registerDestination(formValues)) as AxiosResponse

		if (response.status === 201) {
			setIsTagShown(!isTagShown)
			setTagType({ type: "agency" })
			dispatch(setCreatedDestination(response.data))
		} else {
			setMeesageState("Something went wrong, please try again later")
		}
	}

	const onFinishFailed: FormProps<IdestinationFormProps>["onFinishFailed"] = (
		errorInfo: any
	) => {
		console.log("Failed:", errorInfo)
	}

	return (
		<>
			{isTagShown ? (
				<Tags type={tagType.type} />
			) : (
				<div className="w-full h-screen flex flex-col overflow-y-scroll bg-themeOffwhite items-center justify-evenly pt-16">
					<Form
						name="destinationForm"
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
							Add your Destination
						</h1>

						<Form.Item<IdestinationFormProps>
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

						<Form.Item<IdestinationFormProps>
							label="Description"
							name="description"
							rules={[
								{
									required: true,
									message: "Please enter photo",
									type: "string",
								},
							]}
						>
							<TextArea />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Location"
							name="location"
							rules={[
								{
									required: true,
									message: "Please input destination location coords",
									type: "string",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Destination Cover Photo"
							name="cover"
							rules={[
								{
									required: true,
									message: "Please enter a cover photo",
									type: "string",
								},
							]}
						>
							<input type="file" onChange={handleCoverChange} />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Address"
							name="address"
							rules={[
								{
									required: true,
									message: "Please input an address!",
									type: "string",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Location Logo"
							name="logo"
							rules={[
								{
									required: true,
									message: "Please enter a logo",
									type: "string",
								},
							]}
						>
							<input type="file" onChange={handleLogoChange} />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Phone Number"
							name="phone_number"
							rules={[
								{
									required: true,
									message: "Please input a phone number!",
									type: "string",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="City"
							name="city"
							rules={[
								{
									required: true,
									message: "Please input a city",
									type: "string",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="State"
							name="state"
							rules={[
								{
									required: true,
									message: "Please input a state!",
									type: "string",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Country"
							name="country"
							rules={[
								{
									required: true,
									message: "Please input the destinations country!",
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

						<Form.Item<IdestinationFormProps>
							label="Type of Destination"
							name="type"
							rules={[
								{
									required: true,
									message: "Please input a type!",
									type: "string",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Category"
							name="category"
							rules={[
								{
									required: true,
									message: "Please input a category!",
									type: "string",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Status"
							name="status"
							rules={[
								{
									required: true,
									message: "Please input an address!",
									type: "string",
								},
							]}
						>
							<Input placeholder="open" />
						</Form.Item>

						<Form.Item<IdestinationFormProps>
							label="Age Restriction(optional)"
							name="age_restriction"
						>
							<input type="number" className="bg-white w-14 border " />
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
			)}
		</>
	)
}
