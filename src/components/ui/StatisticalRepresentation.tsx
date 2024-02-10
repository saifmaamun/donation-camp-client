"use client";

import { useGetAllDataQuery } from "@/redux/features/donated/donatedApi";
import { useGetAllPostsQuery } from "@/redux/features/donationPost/donationPostApi";
import { useGetUsersQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "antd";

//
//
// bar chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const StatisticalRepresentation = () => {
  //   setting state
  const [chart, setChart] = useState("Bar");

  // getting all data

  const { data: donatedData } = useGetAllDataQuery({});
  const { data: donationPost } = useGetAllPostsQuery({});
  const { data: users } = useGetUsersQuery({});
  const { email: userEmail } = useAppSelector((state) => state.user);
  console.log(userEmail);
  const totalAmount = donatedData?.data.reduce(
    (sum: any, donation: { amount: any }) => sum + donation.amount,
    0
  );
  //   console.log(totalAmount);
  // for chart data
  const list = donationPost?.data?.map((item: { title: any }) => item.title);
  const amounts = donationPost?.data?.map(
    (item: { donation_amount: any }) => item.donation_amount
  );
  const category = donationPost?.data?.map(
    (item: { category: any }) => item.category
  );
  const cAmounts = donationPost?.data?.map(
    (item: { donation_amount: any }) => item.donation_amount
  );

  //users ersonal donations
  const matchedData = donatedData?.data.filter(
    (data: { email: string }) => data.email === userEmail
  );
  //   console.log(matchedData);
  const userAmounts = matchedData?.map((item: { amount: any }) => item.amount);
  //   console.log(userAmounts);

  // random color
  // Function to generate a random hex color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Generate random colors
  const randomColors1 = getRandomColor();
  const randomColors2 = getRandomColor();

  // chart data
  const data = {
    // labels: list,
    labels: category,
    datasets: [
      {
        label: "Donations",
        data: amounts,
        // backgroundColor: "red",
        backgroundColor: [randomColors1],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: userEmail,
        data: userAmounts,
        // backgroundColor: "blue",
        backgroundColor: [randomColors2],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const options = {};

  return (
    <div>
      <h1>{donatedData?.data?.length}</h1>
      <h1>{donationPost?.data?.length}</h1>
      <h1>{users?.data?.length}</h1>
      <h1>{totalAmount}</h1>
      <Button onClick={() => setChart("Bar")}>BarChart</Button>
      <br />
      <Button onClick={() => setChart("Pie")}>PieChart</Button>
      <>
        {chart === "Bar" && (
          <Bar
            className="w-3/5 h-1/2 mx-auto"
            options={options}
            data={data}
          ></Bar>
        )}
        {chart === "Pie" && (
          <Pie
            className="w-3/5 h-1/2 mx-auto"
            options={options}
            data={data}
          ></Pie>
        )}
      </>
    </div>
  );
};

export default StatisticalRepresentation;
