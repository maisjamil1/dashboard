import Sidebar from "@/components/LayoutComponents/SideBar.tsx";
import MapContainer from "@/components/mapComponents";
import Header from "@/components/LayoutComponents/Header.tsx";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";
import Container from "@/components/ui/container.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <div className="flex w-full flex-1">
          <Sidebar />
          <Container>
            <MapContainer />
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
