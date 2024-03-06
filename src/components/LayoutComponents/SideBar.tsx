import MapIcon from "@/assets/icons/map.tsx";
import { useTheme } from "@/components/ui/theme-provider.tsx";
import DashboardIcon from "@/assets/icons/DashboardIcon.tsx";

export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <aside className="hidden md:flex flex-col pt-15 w-32 h-screen box-border">
      <nav>
        <ul>
          <li className="p-2">
            <a className="text-gray-400 text-sm">
              <div className="block m-2 flex justify-center">
                <DashboardIcon fill={theme === "light" ? "gray" : "white"} />
              </div>
              <span className="block p-2">DASHBOARD</span>
            </a>
          </li>
          <li className="p-2 border-l-8 border-red-600">
            <a className="text-gray-400 text-sm">
              <div className="block m-2 flex justify-center">
                <MapIcon fill={theme === "light" ? "gray" : "white"} />
              </div>
              <span className="block p-2">MAP</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
