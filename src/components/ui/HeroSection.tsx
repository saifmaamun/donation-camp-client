"use client";
import { Button, Space, Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import a from "../../assets/Food.png";
import Image from "next/image";
import { getAllDonations } from "@/utils/getAllDonations";
const { Search } = Input;

const HeroSection = () => {
  
  
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(value);
  return (
    <div className=" bg-slate-400 py-32 bg-opacity-20">
      <div className="h-ful  container mx-auto py-20 justify-items-center text-center items-center ">
        <div className="my-10">
          <h1>I Grow By Helping People In Need</h1>
        </div>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 250 }}
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
