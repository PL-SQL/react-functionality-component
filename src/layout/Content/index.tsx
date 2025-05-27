import AppRoutes from "@routes/index";
import { Layout } from "antd";

const Header: React.FC = () => {
  return (
    <Layout.Content>
      <AppRoutes />
    </Layout.Content>
  );
};

export default Header;
