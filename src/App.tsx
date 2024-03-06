import "./App.css";
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

        <div
          className="docPage__5DB"
          style={{
            boxSizing: "border-box",
            display: "flex",
            width: "100%",
            flex: "1 0 0%",
          }}
        >
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
