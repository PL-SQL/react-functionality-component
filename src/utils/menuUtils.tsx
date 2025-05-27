import routeConfig from "../layout/SiderMenu/menuConfig";
import { Link } from "react-router-dom";

// 从路由配置生成菜单配置
export function generateMenuItems() {
  return routeConfig
    .filter((route) => route.menu)
    .map((route) => ({
      key: route.menu.key,
      label: (
        <Link to={route.path}>
          {route.menu.icon}
          {route.menu.label}
        </Link>
      ),
    }));
}
