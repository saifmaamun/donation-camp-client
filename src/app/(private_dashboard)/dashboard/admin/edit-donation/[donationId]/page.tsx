"use client";

import { TParams } from "@/interfaces/TParams";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";

import { useEditPostMutation } from "@/redux/features/donationPost/donationPostApi";

export type TAddDonationFormValues = {
  title: string;
  donation_amount: number;
  category: string;
  img_url: string;
  theme_url: string;
  details: string;
};

const Editpage = ({ params }: { params: TParams }) => {
  // for update new post
  const [editPost] = useEditPostMutation();

  const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = async (values: TAddDonationFormValues) => {
    const option = {
      id: params.donationId,
      data: values,
    };
    editPost(option);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="max-w-xl shadow-xl bg-white mx-auto">
        <h1 className="text-center text-xl py-6 bg-black text-white">
          Edit Donation Post Form
        </h1>
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="p-5"
          form={form}
        >
          <Form.Item
            label="Donation Title"
            name="title"
            rules={[
              { required: true, message: "Please input donation title!" },
            ]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="donation_amount"
            rules={[
              { required: true, message: "Please input donation amount!" },
            ]}
          >
            <Input type="number" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please input category!" }]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="img_url"
            rules={[{ required: true, message: "Please input image url!" }]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>
          <Form.Item
            label="Theme"
            name="theme_url"
            rules={[
              { required: true, message: "Please input theme Image source!" },
            ]}
          >
            <Input type="text" size="large" className="text-black" />
          </Form.Item>

          <Form.Item
            label="Details"
            name="details"
            rules={[{ required: true, message: "Please input details!" }]}
          >
            <TextArea rows={4} className="text-black" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="bg-black"
              htmlType="submit"
              block
              size="large"
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Editpage;
