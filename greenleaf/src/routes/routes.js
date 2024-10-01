import config from "../config";
import Home from "../pages/Home";
const publicRoutes = [
  // ai cũng truy cập đc
  { path: config.routes.home, component: Home },
];

const privateRoutes = [
  // có quyền mới truy cập đc
];

export { publicRoutes, privateRoutes };
