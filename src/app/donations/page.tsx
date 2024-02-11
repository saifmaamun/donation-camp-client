"use client";
import Donation from "@/components/ui/Donation";
import { useGetAllPostsQuery } from "@/redux/features/donationPost/donationPostApi";
import Loading from "../loading";
import { useAppSelector } from "@/redux/hooks";

const Donations = () => {
  const { email } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetAllPostsQuery({});
  console.log(data?.data);

  return <>{isLoading ? <Loading /> : <Donation donations={data?.data} />}</>;
};

export default Donations;
