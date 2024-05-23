import Layout from "@/layouts";
import DemoComp from "comps/demoComp";

const AboutPage = () => {
  return (
    <Layout activeKey="about">
      <h1>About Page</h1>
      <DemoComp />
    </Layout>
  );
};

export default AboutPage;
