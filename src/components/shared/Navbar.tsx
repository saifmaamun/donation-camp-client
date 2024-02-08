"use client";

import { Button, Layout, Menu, Typography } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Donations", href: "/donations" },
  { key: "2", label: "Statistics", href: "/state" },
  { key: "2", label: "Signup", href: "/signin" },
  { key: "2", label: "Login", href: "/login" },
  { key: "2", label: "Dashboard", href: "/dashboard" },
];

const Navbar = () => {
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
          <Button
            className="ml-4"
            ghost
            size="large"
            type="primary"
            onClick={() => {
              router.push("/");
            }}
          >
            Logout
          </Button>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
