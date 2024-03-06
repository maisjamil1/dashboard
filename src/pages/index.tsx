import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import MapPage from "@/pages/MapPage.tsx";
import DashboardPage from "@/pages/DashboardPage.tsx";
const Pages: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default Pages;
