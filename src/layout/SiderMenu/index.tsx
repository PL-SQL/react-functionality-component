import React from "react";
import { Layout, Menu } from "antd";
import menuConfig from "./menuConfig";
import { useLocation, useNavigate } from "react-router-dom";

const Sider: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    navigate(e.key);
  };

  return (
    <Layout.Sider>
      <Menu
        onClick={handleClick}
        theme={"dark"}
        style={{ textAlign: "left" }}
        selectedKeys={[location.pathname]}
        mode="inline"
        items={menuConfig}
      />
    </Layout.Sider>
  );
};

export default Sider;
