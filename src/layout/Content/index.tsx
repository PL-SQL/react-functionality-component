import AppRoutes from "@routes/index";
import { Layout } from "antd";

const Header: React.FC = () => {
  return (
    <Layout.Content className="m-12">
      <AppRoutes />
    </Layout.Content>
  );
};

export default Header;
