import { Button, Form, FormProps, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAgency } from "../Services/login";
import TextArea from "antd/es/input/TextArea";

type FieldType = {
  name: string;
  name_juridical: string;
  cover: File;
  bio: string;
  logo: File;
  cedula: string;
  phone_number: string;
  address: string;
  email: string;
  bank_account: string;
};

export default function AgencyRegister() {
  const navigate = useNavigate();
  const [coverState, setCover] = useState<File>();
  const [logoState, setLogo] = useState<File>();

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setCover(selectedFile);
    }
  };
  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);

      setLogo(selectedFile);
    }
  };

  const [meesageState, setMessageState] = useState<string>("");

  const onFinish: FormProps<FieldType>["onFinish"] = async (
    values: FieldType
  ) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (coverState) {
      formData.append("cover", coverState);
    }
    if (logoState) {
      formData.append("logo", logoState);
    }
    const response = (await registerAgency(formData)) as any;

    if (response.status === 201) {
      console.log("registered");

      navigate("/");
    } else {
      setMessageState("Something went wrong, please try again later");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col gap-24 overflow-y-scroll bg-themebg">
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
        encType="multipart/form-data">
        <h1 className="text-text font-semibold text-2xl my-10">
          Create Your Agency
        </h1>
        <p className="text-primary font-semibold">{meesageState}</p>

        <Form.Item<FieldType>
          label="Agency Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input an username!",
              type: "string",
            },
          ]}>
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
          ]}>
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Agency Cover Photo"
          name="cover"
          rules={[
            {
              required: true,
              message: "Please enter a cover photo",
              type: "string",
            },
          ]}>
          <input type="file" onChange={handleCoverChange} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Agency Bio"
          name="bio"
          rules={[
            {
              required: true,
              message: "Please input description!",
              type: "string",
            },
          ]}>
          <TextArea />
        </Form.Item>

        <Form.Item<FieldType>
          label="Agency Logo"
          name="logo"
          rules={[
            {
              required: true,
              message: "Please enter a logo",
              type: "string",
            },
          ]}>
          <input type="file" onChange={handleLogoChange} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Personal ID"
          name="cedula"
          rules={[
            {
              required: true,
              message: "Please input your personal ID!",
              type: "string",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Phone Number"
          name="phone_number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
              type: "string",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
              type: "string",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Bank Account"
          name="bank_account"
          rules={[
            {
              required: true,
              message: "Please input enter a bank account!",
              type: "string",
            },
          ]}>
          <Input />
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
  );
}
