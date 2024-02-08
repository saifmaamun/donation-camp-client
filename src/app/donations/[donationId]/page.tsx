import React from "react";

export type TParams = {
  donationId: string;
};

const DonationDetails = async ({ params }: { params: TParams }) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/posts/${params.donationId}`
  );
  const data = await res.json();

  return (
    <div>
      <h1>Title: {data.data.title}</h1>
    </div>
  );
};

export default DonationDetails;
