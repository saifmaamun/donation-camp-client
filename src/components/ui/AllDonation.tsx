"use client";

import Loading from "@/app/loading";
import {
  useDeletePostMutation,
  useGetAllPostsQuery,
} from "@/redux/features/donationPost/donationPostApi";
import React from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { DeleteFilled, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

// table

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const AllDonation = () => {
  const { data, isLoading } = useGetAllPostsQuery({});
  const [deletePost] = useDeletePostMutation();

  const router = useRouter();

  //   delete function
  const handleDelete = (id: string) => {
    const handleOk = async () => {};

    Modal.confirm({
      title: "Are you sure you want to delete this service?",
      okText: "Delete",
      okButtonProps: {
        style: {
          backgroundColor: "#FF7875",
          border: "none",
          color: "white",
        },
      },
      onOk: () => deletePost(id).then(() => console.log("first")),
    });
  };

  //   columns
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Image",
      key: "action",
      render: (record: AnyObject) => {
        return (
          <div>
            <Image src={record.img_url} width={400} height={150} alt="pic" />
          </div>
        );
      },
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      // render: (text) => <a>{text}</a>,
    },

    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },

    {
      title: "Donation Amount",
      dataIndex: "donation_amount",
      key: "amount",
    },
    {
      title: "Total Donated",
      key: "action",
      render: (record: AnyObject) => {
        return <div>{record.donation.length} times</div>;
      },
    },
    {
      title: "Edit/ Delete",
      key: "action",
      render: (record: AnyObject) => {
        return (
          <div>
            <Button
              className="text-xl"
              type="link"
              onClick={() => router.push(`/admin/edit-donation/${record._id}`)}
            >
              <EditOutlined />
            </Button>
            <Button
              className="text-xl"
              type="link"
              danger
              onClick={() => handleDelete(record._id)}
            >
              <DeleteFilled />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>data</h1>
          <div className="flex justify-between items-center pb-4">
            <h1 className="text-2xl ">Manage Donation Post</h1>
            <Button
              type="link"
              onClick={() => router.push("/admin/add-donation")}
            >
              <PlusOutlined /> Add New Donation Post{" "}
            </Button>
          </div>
          <Table columns={columns} dataSource={data?.data} />
        </>
      )}
    </>
  );
};

export default AllDonation;
