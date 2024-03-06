import MapIcon from "@/assets/icons/map.tsx";
import { useTheme } from "@/components/ui/theme-provider.tsx";
import DashboardIcon from "@/assets/icons/DashboardIcon.tsx";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const { theme } = useTheme();
  const location = useLocation();

  const isMapSelected = (path: string) => {
    //@todo : enhance me
    return path == "/";
  };

  return (
    <aside className="hidden md:flex flex-col pt-15 w-32 h-screen box-border">
      <nav>
        <ul className="text-center">
          <li
            className={`p-2  ${!isMapSelected(location.pathname) ? "border-l-8 border-red-600" : ""}`}
          >
            <NavLink className="text-gray-400 text-sm" to={"/dashboard"}>
              <div className="block m-2 flex justify-center">
                <DashboardIcon fill={theme === "light" ? "gray" : "white"} />
              </div>
              <span className="block p-2">DASHBOARD</span>
            </NavLink>
          </li>
          <li
            className={`p-2  ${isMapSelected(location.pathname) ? "border-l-8 border-red-600" : ""}`}
          >
            <NavLink className="text-gray-400 text-sm" to={"/"}>
              <div className="block m-2 flex justify-center">
                <MapIcon fill={theme === "light" ? "gray" : "white"} />
              </div>
              <span className="block p-2">MAP</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
