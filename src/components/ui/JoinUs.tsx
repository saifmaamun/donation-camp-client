import {
  DollarCircleOutlined,
  DollarOutlined,
  LikeFilled,
  SmileFilled,
} from "@ant-design/icons";
import React from "react";

const JoinUs = () => {
  return (
    <div className="container mx-auto py-20 px-8 text-center space-y-6">
      <h1>Join Us</h1>
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="flex flex-col space-y-4 justify-center align-middle items-center text-black">
          <DollarCircleOutlined className="text-6xl" />
          <h1>DONATIONS</h1>
          <p className="text-sm text-gray-700 px-10">
            We are always with you at any crisis in Bangladesh to help and
            support you
          </p>
        </div>
        <div className="flex flex-col space-y-4 justify-center align-middle items-center text-black">
          <SmileFilled className="text-6xl" />
          <h1>VOLUNTEER</h1>
          <p className="text-sm text-gray-700 px-10">
            We are always with you at any crisis in Bangladesh to help and
            support you
          </p>
        </div>
        <div className="flex flex-col space-y-4 justify-center align-middle items-center text-black">
          <LikeFilled className="text-6xl" />
          <h1>SUPPORTING</h1>
          <p className="text-sm text-gray-700 px-10">
            We are always with you at any crisis in Bangladesh to help and
            support you
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
