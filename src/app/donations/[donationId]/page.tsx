"use client";

import Loading from "@/app/loading";
import { TParams } from "@/interfaces/TParams";
import { useGetPostByIdQuery } from "@/redux/features/donationPost/donationPostApi";
import { Card } from "antd";
import Image from "next/image";
import { Space, Typography } from "antd";

const { Text, Link } = Typography;

const DonationDetails = ({ params }: { params: TParams }) => {
  const { data, isLoading } = useGetPostByIdQuery(params.donationId);
  // const { title, category, details, img_url, theme_url, donation_amount } =
  //   data?.data;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto my-20 lg:w-3/4 sm:w-2/3">
          <Card hoverable>
            <Image
              src={data?.data?.img_url}
              width={100}
              height={100}
              alt={data?.data?.title}
            />
            <h1>{data?.data?.title}</h1>
            <Text type="danger" className="font-bold">
              {data?.data?.category}
            </Text>
            <p className="">{data?.data?.details}</p>
            <p>{data?.data?.donation_amount}</p>
          </Card>
        </div>
      )}
    </>
  );
};

export default DonationDetails;
