import { Form, FormProps, Input, DatePicker, Button } from "antd"
import { useState } from "react"
import {
	DollarTwoTone,
	MinusCircleOutlined,
	PlusCircleOutlined,
} from "@ant-design/icons"
import moment, { Moment } from "moment"
import { addPriceToDestiny } from "../Services"
import { useAppSelector } from "../../../Shared/App/hook"
import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"

const dateFormat = "YYYY/MM/DD"

export default function DestinationPriceForm() {
	const [messageState, setMessageState] = useState<string>("")
	const [priceCount, setPriceCount] = useState([1])
	const [dates, setDates] = useState<
		{ startDate: moment.Moment; endDate: moment.Moment }[]
	>([{ startDate: moment(), endDate: moment() }])

	const navigate = useNavigate()

	const createdDestination = useAppSelector(
		(state) => state.destinations.createdDestination
	)

	const handleAddPriceCount = () => {
		setPriceCount([...priceCount, priceCount.length + 1])
		setDates([...dates, { startDate: moment(), endDate: moment() }])
	}

	const handleDecreasePriceCount = () => {
		if (priceCount.length > 1) {
			setPriceCount(priceCount.slice(0, -1))
			setDates(dates.slice(0, -1))
		}
	}

	const handleDateChange = (
		index: number,
		field: "startDate" | "endDate",
		date: Moment
	) => {
		const updatedDates = [...dates]
		// Check if the dates[index] is defined before accessing endDate
		if (updatedDates[index]) {
			updatedDates[index][field] = date
			setDates(updatedDates)
		}
	}

	const onFinish = async (fieldsValue: any) => {
		// Iterate over each field in fieldsValue
		Object.keys(fieldsValue).forEach(async (field) => {
			const [name] = field.split("-")

			if (name === "startDate" || name === "endDate") {
				fieldsValue[field] = moment(fieldsValue[field]).format("YYYY-MM-DD")
			}
		})
		for (let index = 1; fieldsValue[`startDate-${index}`]; index++) {
			const props: any = {
				startDate: fieldsValue[`startDate-${index}`],
				endDate: fieldsValue[`endDate-${index}`],
				price: fieldsValue[`price-${index}`],
			}

			const response = (await addPriceToDestiny(
				props,
				createdDestination!.id!
			)) as AxiosResponse
			if (response.status === 201) {
				setMessageState("Seasons added successfully")
				navigate("/")
			} else {
				setMessageState("Failed to add seasons")
			}
		}
	}

	const onFinishFailed: FormProps<any>["onFinishFailed"] = (errorInfo: any) => {
		console.log("Failed:", errorInfo)
	}

	return (
		<div className="w-full h-screen flex flex-col bg-themeOffwhite pt-24 justify-between px-4 pb-8 gap-16 overflow-hidden">
			<div className="flex flex-col justify-center gap-4">
				<h1 className="text-text font-semibold text-2xl">Add Seasons</h1>
				<div className="flex gap-4">
					<Button
						type="primary"
						onClick={handleAddPriceCount}
						className="w-fit flex justify-center items-center px-4 py-2 "
					>
						<PlusCircleOutlined />
					</Button>
					<Button
						type="primary"
						onClick={handleDecreasePriceCount}
						className="w-fit flex justify-center items-center px-4 py-2 "
					>
						<MinusCircleOutlined />
					</Button>
				</div>
			</div>

			<Form
				name="destinationForm"
				style={{
					maxWidth: 600,
					maxHeight: 400,
					paddingInline: "1rem",
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="on"
				encType="multipart/form-data"
			>
				<div className="flex flex-col h-[600px] max-h-[400px] gap-4 w-full pb=8 overflow-y-scroll mb-8">
					{priceCount.map((index) => (
						<div
							className="border shadow-md rounded-xl p-4 bg-white"
							key={index}
						>
							<p>Season {index}</p>
							<div className="flex items-center justify-center">
								<Form.Item
									label="Start Date"
									name={`startDate-${index}`}
									rules={[
										{
											type: "object" as const,
											required: true,
											message: "Please select time!",
										},
									]}
								>
									<DatePicker
										format={dateFormat}
										value={dates[index]?.startDate}
										onChange={(date) =>
											handleDateChange(index, "startDate", date)
										}
									/>
								</Form.Item>
								<Form.Item
									label="End Date"
									name={`endDate-${index}`}
									rules={[
										{
											type: "object" as const,
											required: true,
											message: "Please select time!",
										},
									]}
								>
									<DatePicker
										format={dateFormat}
										value={dates[index]?.endDate}
										onChange={(date) =>
											handleDateChange(index, "endDate", date)
										}
									/>
								</Form.Item>
							</div>
							<Form.Item
								label="Price"
								name={`price-${index}`}
								rules={[
									{
										required: true,
										message: "Please input the price for this season",
										type: "string",
									},
								]}
							>
								<Input addonBefore={<DollarTwoTone />} placeholder="USD" />
							</Form.Item>
						</div>
					))}
				</div>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Register
					</Button>
				</Form.Item>
			</Form>
			<p className="text-themePrimary font-semibold my-0">{messageState}</p>
		</div>
	)
}
