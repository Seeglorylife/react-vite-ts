import { createBrowserRouter } from "react-router-dom";

import routes from "./routes";

//可传第二个参数，配置base路径 eg: { basename: "/comp" }
const router = createBrowserRouter(routes);

export default router;
