"use client";
import Loading from "@/app/loading";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { AnyObject } from "antd/es/_util/type";
import Image from "next/image";
import { useGetAllDataQuery } from "@/redux/features/donated/donatedApi";

// table

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const MyDonations = () => {
  const { data, isLoading } = useGetAllDataQuery({});
  const { email } = useAppSelector((state) => state.user);
  console.log(data?.data, email);

  // filtering my donations
  const matchedData = data?.data.filter(
    (data: { email: string }) => data.email === email
  );
  console.log(matchedData);
  //   table column
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      // render: (text) => <a>{text}</a>,
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Donation Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];

  // Log the matching entries to the console
  // console.log(matchingEntries);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>{matchedData.length}</h1>
          <Table columns={columns} dataSource={matchedData} />
        </>
      )}
    </>
  );
};

export default MyDonations;
