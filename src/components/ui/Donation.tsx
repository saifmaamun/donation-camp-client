import { TDonation } from "@/interfaces/IDonationsPost";
import { Button, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Text } = Typography;

const Donation = ({ donations }: { donations: TDonation[] }) => {
  return (
    <div className="col-span-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-20 gap-5 p-10 lg:w-[80%] mx-auto">
      {donations?.map((donation: TDonation) => (
        <div
          key={donation._id}
          className="rounded-2xl flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all"
        >
          <Image
            className="my-2"
            src={donation.img_url}
            width={430}
            height={250}
            alt={donation.title}
          />
          <h2 className="font-semibold">
            {donation?.title.length > 30
              ? donation?.title.slice(0, 30)
              : donation?.title}
            ...
          </h2>
          <Text type="danger" className="font-bold">
            {donation.category}
          </Text>
          <p className="my-3">
            {donation?.details.length > 150
              ? donation?.details.slice(0, 150)
              : donation?.details}
            ...
          </p>
          <p>
            <span className="font-semibold">Contribution :$</span>{" "}
            {donation?.donation_amount}
          </p>

          <Link
            href={`/donations/${donation._id}`}
            className="mt-4 w-full text-right"
          >
            <Button type="primary" className="bg-black">
              Details
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Donation;
