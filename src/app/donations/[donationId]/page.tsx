"use client";

import Loading from "@/app/loading";
import { TParams } from "@/interfaces/TParams";
import {
  useEditPostMutation,
  useGetPostByIdQuery,
} from "@/redux/features/donationPost/donationPostApi";
import { Button, Card } from "antd";
import Image from "next/image";
import { Space, Typography } from "antd";
import { useAppDispatch } from "@/redux/hooks";
import {
  setAmount,
  setCategory,
  setDetails,
  setId,
  setImg,
  setTheme,
  setTitle,
} from "@/redux/features/donationPost/donationPostSlice";

const { Text, Link } = Typography;

const DonationDetails = ({ params }: { params: TParams }) => {
  const { data, isLoading } = useGetPostByIdQuery(params.donationId);

  // setting the data into store
  const dispatch = useAppDispatch();
  if (data?.data) {
    dispatch(setId(params.donationId));
    dispatch(setTitle(data?.data.title));
    dispatch(setCategory(data?.data.category));
    dispatch(setImg(data?.data.img_url));
    dispatch(setTheme(data?.data.theme_url));
    dispatch(setDetails(data?.data.details));
    dispatch(setAmount(data?.data.donation_amount));
  }

  const [editPost] = useEditPostMutation();

  // handel donation
  const handleDonation = () => {};

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
            <div className="my-4">
              <Button onClick={handleDonation}>
                Donate {data?.data?.donation_amount}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default DonationDetails;
