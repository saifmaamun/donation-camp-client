"use client";
import { useGetAllDataQuery } from "@/redux/features/donated/donatedApi";
import { useGetAllPostsQuery } from "@/redux/features/donationPost/donationPostApi";
import { Button, Space, Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { useState } from "react";
import PickDonations from "./PickDonations";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSearchedData } from "@/redux/features/searched/searchedSlice";
import Loading from "@/app/loading";

const { Search } = Input;

const HeroSection = () => {
  // setting states
  const [search, setSearch] = useState(false);
  const [show, setShow] = useState("block");
  const { searchedStateData } = useAppSelector((state) => state.searched);
  const dispatch = useAppDispatch();

  // getting data from db
  const { data, isLoading } = useGetAllPostsQuery({});

  const handleSearchedData = (value: string) => {
    setSearch(true);
    if (search) {
      const filteredData = data?.data.filter((item: { category: string }) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );

      dispatch(setSearchedData(filteredData));
      setShow("hidden");
    }
  };

  return (
    <>
      <div className=" bg-slate-400 py-32 bg-opacity-20">
        <div className="h-ful  container mx-auto py-20 justify-items-center text-center items-center ">
          <div className="my-10">
            <h1>I Grow By Helping People In Need</h1>
          </div>

          <div>
            <Space direction="vertical">
              <Search
                placeholder="input search text"
                onSearch={handleSearchedData}
                style={{ width: 250 }}
              />
            </Space>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-20  text-4xl text-center">
          <h1>Some of Our Events</h1>
        </div>
        <div className={show}>
          {isLoading ? <Loading /> : <PickDonations donations={data?.data} />}
        </div>
        <div>
          {!searchedStateData ? (
            <PickDonations donations={data?.data} />
          ) : (
            <PickDonations donations={searchedStateData} />
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
