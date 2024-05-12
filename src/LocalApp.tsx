import App from "./App";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

function LocalApp() {
  const locale = zhCN.locale; // TODO 可以后续读取全局store变量

  <ConfigProvider locale={locale === "en" ? enUS : zhCN}>
    <App />
  </ConfigProvider>;
}

export default LocalApp;
