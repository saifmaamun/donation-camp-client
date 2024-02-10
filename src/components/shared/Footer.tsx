"use client";

import {
  DiscordFilled,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  SkypeFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Divider } from "antd";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-12 lg:pt-12 md:pt-16 pt-12 pb-12 bg-black text-white text-center">
      <div className="py-16 container mx-auto">
        <h1 className="md:text-5xl text-2xl">DONATION CAMP</h1>
        <div className="md:flex justify-evenly grid grid-cols-1 gap-2 items-center  py-6">
          <Link className="no-underline text-white" href="/">
            About Us
          </Link>
          <Link className="no-underline text-white" href="/">
            Career
          </Link>
          <Link className="no-underline text-white" href="/">
            Press
          </Link>
          <Link className="no-underline text-white" href="/">
            Contact
          </Link>
          <Link className="no-underline text-white" href="/">
            Stratigic Cause
          </Link>
          <Link className="no-underline text-white" href="/">
            Partnership
          </Link>
          <Link className="no-underline text-white" href="/">
            Medic Care
          </Link>
          <Link className="no-underline text-white" href="/">
            Shop
          </Link>
        </div>
        <div className="space-y-2 text-gray-700">
          <p>
            &copy; 2024 bangali society for the prevention of cruelty to human.
            all rights reserved{" "}
          </p>
          <p>
            the donation camp is a non-for-profit organization.{" "}
            <span className="underline text-white">
              {" "}
              Privacy policy legal Info
            </span>
          </p>
        </div>
        <div className="md:flex justify-center align-middle md:space-x-6 text-2xl grid grid-cols-1 gap-2 items-center  py-8">
          <Link className="no-underline text-white" href="/">
            <FacebookFilled />
          </Link>
          <Link className="no-underline text-white" href="/">
            <LinkedinFilled />
          </Link>
          <Link className="no-underline text-white" href="/">
            <YoutubeFilled />
          </Link>
          <Link className="no-underline text-white" href="/">
            <InstagramFilled />
          </Link>

          <Link className="no-underline text-white" href="/">
            <SkypeFilled />
          </Link>
          <Link className="no-underline text-white" href="/">
            <DiscordFilled />
          </Link>
        </div>
        <Divider className="bg-neutral-700 " />
        {/* <div className="space-y-2 text-gray-700">
          <p>Our Partnership</p>
          
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
