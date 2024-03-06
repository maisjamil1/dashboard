import Sidebar from "@/components/LayoutComponents/SideBar.tsx";
import Header from "@/components/LayoutComponents/Header.tsx";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import Pages from "@/pages";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Header />
          <div className="flex w-full flex-1">
            <Sidebar />
            <Pages />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
