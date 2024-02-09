"use client";

import Loading from "@/app/loading";
import { TParams } from "@/interfaces/TParams";
import { useGetPostByIdQuery } from "@/redux/features/donationPost/donationPostApi";

const DonationDetails = ({ params }: { params: TParams }) => {
  const { data, isLoading } = useGetPostByIdQuery(params.donationId);
  console.log(data);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>Title: {data?.data.title}</h1>
        </div>
      )}
    </>
  );
};

export default DonationDetails;
