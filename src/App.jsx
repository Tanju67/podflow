import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EpisodeDetailPage from "./pages/EpisodeDetailPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";
import PodcasterDetailPage from "./pages/PodcasterDetailPage";
import TopicDetailPage from "./pages/TopicDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/podcasters/:podcasterId",
        element: <PodcasterDetailPage />,
      },
      {
        path: "/episodes/:episodeId",
        element: <EpisodeDetailPage />,
      },
      {
        path: "/topics/:topicId",
        element: <TopicDetailPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
