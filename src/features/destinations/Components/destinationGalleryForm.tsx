import { useState } from "react"
import { Carousel, Form, Button, Upload } from "antd"
import { InboxOutlined } from "@ant-design/icons"
import { addGalleryToDestiny } from "../Services"
import { useAppSelector } from "../../../Shared/App/hook"
import { useNavigate } from "react-router-dom"

const DestinationGalleryForm = () => {
	const navigate = useNavigate()
	const createdDestination = useAppSelector(
		(state) => state.destinations.createdDestination
	)
	const [form] = Form.useForm()
	const [fileList, setFileList] = useState([])

	const normFile = (e: any) => {
		if (Array.isArray(e)) {
			return e
		}
		return e && e.fileList
	}

	const handleChange = ({ fileList }: any) => {
		setFileList(fileList)
	}

	const handleFinish = () => {
		const imgArr = fileList.map((file: any) => file.originFileObj)
		const uploadprops = {
			images: imgArr,
		}

		const response = addGalleryToDestiny(
			uploadprops,
			createdDestination!.id!
		) as any
		if (response.status === 200) {
			navigate("/price")
		} else {
			console.log(response)
		}
	}

	return (
		<div className="pt-28 flex flex-col gap-16 px-6 max-h-screen">
			<h1 className="text-themeText font-semibold text-2xl my-5">
				Add pictures to your destination
			</h1>

			<Carousel autoplay className="h-56">
				{fileList.length > 0 ? (
					fileList.map((file: any, index) => (
						<div key={index}>
							<img
								src={URL.createObjectURL(file.originFileObj)}
								style={{ width: "100%", height: "200px", objectFit: "cover" }}
							/>
						</div>
					))
				) : (
					<div>
						<img
							src="https://placehold.co/400x200"
							alt="Placeholder"
							style={{ width: "100%", height: "200px", objectFit: "cover" }}
						/>
					</div>
				)}
			</Carousel>
			<Form
				form={form}
				name="destinationGalleryForm"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={handleFinish}
				autoComplete="on"
				encType="multipart/form-data"
			>
				<Form.Item
					name="dragger"
					valuePropName="fileList"
					getValueFromEvent={normFile}
					noStyle
					rules={[
						{ required: true, message: "Please upload at least one file!" },
					]}
				>
					<Upload.Dragger
						name="files"
						accept="image/*"
						fileList={fileList}
						onChange={handleChange}
						multiple
						showUploadList={false}
					>
						<p className="ant-upload-drag-icon">
							<InboxOutlined />
						</p>
						<p className="ant-upload-text">
							Click or drag file to this area to upload
						</p>
						<p className="ant-upload-hint">
							Support for multiple file uploads.
						</p>
					</Upload.Dragger>
				</Form.Item>
				<Form.Item className="mt-16 flex w-full justify-center">
					<Button type="primary" htmlType="submit" shape="round" size="large">
						Add Photos
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default DestinationGalleryForm
