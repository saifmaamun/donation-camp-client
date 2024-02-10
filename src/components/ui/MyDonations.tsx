"use client";
import Loading from "@/app/loading";
import { useGetAllPostsQuery } from "@/redux/features/donationPost/donationPostApi";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { AnyObject } from "antd/es/_util/type";
import Image from "next/image";

// table

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const MyDonations = () => {
  const { data, isLoading } = useGetAllPostsQuery({});
  const { email } = useAppSelector((state) => state.user);
  console.log(data?.data, email);

  // filtering my donations
  const matchingEntries = data?.data?.filter((entry: { donation: any[] }) =>
    entry.donation.some((donation: { email: any }) => donation.email === email)
  );

  //   table column
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
  ];

  // Log the matching entries to the console
  console.log(matchingEntries);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>{matchingEntries.length}</h1>
          <Table columns={columns} dataSource={matchingEntries} />
        </>
      )}
    </>
  );
};

export default MyDonations;
