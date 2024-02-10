"use client";
import { Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Content, Sider } = Layout;

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const adminItems = [
    { key: "1", label: "Dashboard", href: "/dashboard" },
    {
      key: "3",
      label: "My Contributions",
      href: "/dashboard/user/my-donations",
    },
    {
      key: "4",
      label: "All Donation Posts",
      href: "/dashboard/admin/all-donations",
    },
    { key: "5", label: "Graph", href: "/dashboard/admin/state" },
  ];

  const pathname = usePathname();
  const getSelectedKey = () => {
    return adminItems.find((item) => item.href === pathname)?.key || "";
  };

  return (
    <Layout>
      <Content>
        <Layout className="lg:flex grid grid-cols-1">
          <Sider className="lg:min-h-screen bg-black m-6 py-2 rounded-xl max-w">
            <Menu
              className="h-full px-3 font-semibold  bg-transparent py-1"
              mode="inline"
              defaultSelectedKeys={[getSelectedKey()]}
              selectedKeys={[getSelectedKey()]}
            >
              {adminItems?.map((item) => (
                <Menu.Item
                  key={item.key}
                  className="text-blue-700 active:bg-white"
                >
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content className=" p-2 w-fit min-h-screen ">{children}</Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Sidebar;
