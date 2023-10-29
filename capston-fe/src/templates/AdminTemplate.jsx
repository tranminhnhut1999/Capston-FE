import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading/Loading";
import "./AdminTemplate.scss";
import {
  CodeSandboxOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";

const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [admin] = useState({});

  const items = [
    {
      key: "1",
      icon: <SettingOutlined />,
      label: <div>Setting</div>,
    },
    {
      type: "divider",
    },
  ];

  return (
    <Fragment>
      {isLoading ? <Loading /> : <></>}
      <Layout id="admin__template" className="min-h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="sticky top-0"
            items={[
              {
                label: (
                  <NavLink
                    to="/"
                    className="text-sm text-black"
                    target="_blank"
                  >
                    E-Learning
                  </NavLink>
                ),
              },
              {
                key: "1",
                icon: <TeamOutlined />,
                label: <NavLink to="/admin">Người dùng</NavLink>,
              },
              {
                key: "2",
                icon: <CodeSandboxOutlined />,
                label: <NavLink to="/admin/course">Khóa học</NavLink>,
              }
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className="flex items-center justify-between"
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              trigger={"click"}
            >
              <div className="flex items-center justify-center cursor-pointer group">
                <p>
                  Hello!{" "}
                  <span className="font-bold uppercase duration-300 group-hover:text-orange-400">
                    {admin.hoTen}
                  </span>
                </p>
              </div>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: "right",
            }}
            className="py-3 bg-white"
          >
            E-Learning © 2023. All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default AdminTemplate;
