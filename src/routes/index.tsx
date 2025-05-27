import NotFoundPage from "@components/common/NotFoundPage";
import Dashboard from "@pages/Dashboard";
import DragAndSorting from "@pages/DragAndSorting";
import HomePage from "@pages/Home";
import { Routes, Route } from "react-router-dom";

// const baseRouteConfig: { element: ReactNode; path: string } = [{ path: "/", element: HomePage }];

const AppRoutes = () => {
  return (
    <Routes>
      {/* {routeConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path === "/" ? "" : route.path} // 根路径需要特殊处理
          element={route.element}
        />
      ))} */}
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/drag-and-sort"} element={<DragAndSorting />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
