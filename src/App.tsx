import Header from "./components/header";
import HomeContent from "./components/home-content";
import AboutContent from "./components/about-content";
import RandomWordsContent from "./components/random-words-content";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/random-words" element={<RandomWordsContent />} />
      </Routes>
    </div>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
