import RoundTripHeader from "./RoundTripHeader";
import { Button, Form, Input, Select, Space, DatePicker } from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RoundTripContainer = () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };
  const onFinish = () => {
    console.log("form", form.getFieldsValue());

    form.resetFields();
  };

  //   const onFill = () => {
  //     form.setFieldsValue({ note: "Hello world!", hacia: "male" });
  //   };
  return (
    <div>
      <RoundTripHeader />

      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}>
        <Form.Item name="desde" label="Desde" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="hacia" label="Hacia" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="fecha" label="Fecha">
          <RangePicker />
        </Form.Item>
        <Form.Item name="gender" label="Gender" hidden>
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RoundTripContainer;
