import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import "./App.css";
import ArtworksListContent from "./components/ArtworksListContent";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import ArtworkContent from "./components/ArtworkContent";

function Root() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArtworksListContent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artwork/:id" element={<ArtworkContent />} />
      </Routes>
    </div>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}
