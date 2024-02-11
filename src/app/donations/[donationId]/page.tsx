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
import { useAddDataMutation } from "@/redux/features/donated/donatedApi";
import { HeartFilled } from "@ant-design/icons";

const { Text } = Typography;

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
  const { id, title, category, img_url, theme_url, details, donation_amount } =
    useAppSelector((state) => state.donation);

  const [addData] = useAddDataMutation();

  // handel donation
  const handleDonation = () => {
    const donationData = {
      id: params.donationId,
      title: title,
      amount: donation_amount,
      email: email,
    };

    addData(donationData).then(() =>
      message.success("Thank you for your donation")
    );
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

            <div className="my-4">
              {email && (
                <Button
                  className="bg-black text-white"
                  onClick={handleDonation}
                >
                  Donate {data?.data?.donation_amount}{" "}
                  <HeartFilled className="text-red-700" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default DonationDetails;
