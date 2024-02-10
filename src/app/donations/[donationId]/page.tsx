"use client";

import Loading from "@/app/loading";
import { TParams } from "@/interfaces/TParams";
import {
  useEditPostMutation,
  useGetPostByIdQuery,
} from "@/redux/features/donationPost/donationPostApi";
import { Button, Card, message } from "antd";
import Image from "next/image";
import { Space, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setAmount,
  setCategory,
  setDetails,
  setDonation,
  setId,
  setImg,
  setTheme,
  setTitle,
} from "@/redux/features/donationPost/donationPostSlice";

const { Text, Link } = Typography;

const DonationDetails = ({ params }: { params: TParams }) => {
  const { data, isLoading } = useGetPostByIdQuery(params.donationId);
  const { email } = useAppSelector((state) => state.user);

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
  const {
    id,
    title,
    category,
    img_url,
    theme_url,
    details,
    donation_amount,
    donation,
  } = useAppSelector((state) => state.donation);

  const [editPost] = useEditPostMutation();

  // handel donation
  const handleDonation = () => {
    const donationData = {
      id: params.donationId,
      email: email,
      category: category,
      title: title,
      amount: donation_amount,
    };
    dispatch(setDonation(donationData));
    const updatedData = {
      id,
      title,
      category,
      img_url,
      theme_url,
      details,
      donation_amount,
      donation,
    };

    const option = {
      id: id,
      data: updatedData,
    };
    console.log(option);
    editPost(option).then(() => message.success("Thank you for your donation"));
  };

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
