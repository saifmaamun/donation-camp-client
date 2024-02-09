"use client";
import Donation from "@/components/ui/Donation";
import { useGetAllPostsQuery } from "@/redux/features/donationPost/donationPostApi";
import Loading from "../loading";

const Donations = () => {
  const { data, isLoading } = useGetAllPostsQuery({});

  return <>{isLoading ? <Loading /> : <Donation donations={data?.data} />}</>;
};

export default Donations;
