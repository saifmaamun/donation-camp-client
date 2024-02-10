"use client";

import {
  TInitialState,
  setEmail,
  setRole,
} from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { authOptions } from "@/utils/authOptions";
import { Button, Dropdown, Layout, Menu, Typography } from "antd";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// for mobile
import { useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Donations", href: "/donations" },
  { key: "2", label: "About Us", href: "/about" },
  { key: "2", label: "Contact Us", href: "/contact" },
];

const Navbar = ({ session, user }: { session: any; user: TInitialState }) => {
  //  ser user
  const dispatch = useAppDispatch();
  dispatch(setEmail(user?.email));
  dispatch(setRole(user?.role));

  // for mobile
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const pathname = usePathname();
  const router = useRouter();

  return (
    <Layout className="layout shadow-lg">
      <Header className="flex items-center py-8 bg-black ">
        <Content>
          <Link href="/">
            <Title className="m-0 lg:text-4xl md:text-3xl sm:text-2xl text-xl    text-white flex items-center">
              <p className="m-0 ml-2 ">Donation Camps</p>
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden bg-black"
          disabledOverflow
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href} className="text-white">
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
          {!session ? (
            <>
              <Menu.Item className="text-white">
                <Link href="/login">login</Link>
              </Menu.Item>
              <Menu.Item className="text-white">
                <Link href="/signin">Signup</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item className="text-white">
                <Link href="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Button
                className="ml-4 text-white"
                ghost
                size="large"
                type="primary"
                onClick={() => {
                  signOut().then(() => router.push("/"));
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Menu>

        {/* for mobile */}
        <Button onClick={handleShow} className="lg:hidden sm:block -mr-6">
          Menu
        </Button>
        {show && (
          <div className="relative">
            <Menu className=" absolute top-8 -right-8 lg:hidden sm:block">
              {items?.map((item) => (
                <Menu.Item key={item.href}>
                  <Link onClick={handleShow} href={item.href}>
                    {item.label}
                  </Link>
                </Menu.Item>
              ))}
              {!session ? (
                <>
                  <Menu.Item>
                    <Link onClick={handleShow} href="/login">
                      login
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link onClick={handleShow} href="/signin">
                      Signup
                    </Link>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item>
                    <Link onClick={handleShow} href="/dashboard">
                      Dashboard
                    </Link>
                  </Menu.Item>
                  <Button
                    className="ml-4"
                    ghost
                    size="large"
                    type="primary"
                    onClick={() => {
                      signOut().then(() => router.push("/"));
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </Menu>
          </div>
        )}
      </Header>
    </Layout>
  );
};

export default Navbar;
