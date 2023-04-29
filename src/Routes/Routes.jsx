import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Category from "../Pages/Category/Category";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import NewsLayout from "../Layout/NewsLayout";

import UserLayout from "../Layout/UserLayout";
import SignUp from "../Pages/User/Signup/Signup";
import Login from "../Pages/User/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Terms/Terms";

const route = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/termsAndCondition",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default route;
