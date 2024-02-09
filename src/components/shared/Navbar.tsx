"use client";

import { Button, Dropdown, Layout, Menu, Typography } from "antd";
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
  { key: "3", label: "Statistics", href: "/state" },
  // { key: "2", label: "Signup", href: "/signin" },
  // { key: "2", label: "Login", href: "/login" },
  // { key: "2", label: "Dashboard", href: "/dashboard" },
];

const Navbar = ({ session }: { session: any }) => {
  // for mobile
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const pathname = usePathname();
  const router = useRouter();

  return (
    <Layout className="layout shadow-lg">
      <Header className="flex items-center py-8 bg-white ">
        <Content>
          <Link href="/">
            <Title className="m-0 text-2xl flex items-center">
              <p className="m-0 ml-2">Donation Camp</p>
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
          {!session ? (
            <>
              <Menu.Item>
                <Link href="/login">login</Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/signin">Signup</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item>
                <Link href="/dashboard">Dashboard</Link>
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
