import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import SiderMenu from "./SiderMenu";
import Header from "./Header";
import Content from "./Content";

const LayoutComponent = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Layout>
        <Router>
          <SiderMenu />
          <Content />
        </Router>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
