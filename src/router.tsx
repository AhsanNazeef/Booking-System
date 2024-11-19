import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ExploreTours from "./pages/ExploreTours";
import Layout from "./components/Layout";
import BookTour from "./pages/BookTour";
import MyTours from "./pages/MyTours";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore-tours", element: <ExploreTours /> },
      { path: "/book-tour", element: <BookTour /> },
      { path: "/my-tours", element: <MyTours /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
