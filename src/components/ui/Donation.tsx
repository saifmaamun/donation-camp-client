import { TDonation } from "@/interfaces/IDonationsPost";
import { Button } from "antd";
import Link from "next/link";

const Donation = ({ donations }: { donations: TDonation[] }) => {
  return (
    <div className="col-span-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 p-10 lg:w-[80%] mx-auto">
      {donations?.map((donation: TDonation) => (
        <div
          key={donation._id}
          className="rounded-2xl flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all"
        >
          <h1 className="text-2xl font-semibold">{donation?.title}</h1>
          <p className="my-3">{donation?.details}</p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            {donation?.donation_amount}
          </p>

          <Link
            href={`/donations/${donation._id}`}
            className="mt-4 w-full text-right"
          >
            <Button type="primary">Details</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Donation;
