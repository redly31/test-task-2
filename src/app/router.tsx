import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./layout";
import { BreedsPage } from "@pages/breeds";
import { ErrorPage } from "@pages/error";
import { FactsPage } from "@pages/facts";
import { HomePage } from "@pages/home";
import { Routes } from "@shared/constants/Routes";
import { Route } from "@shared/types/Route";

export const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: Routes.HOME,
        element: <HomePage/>,
      },
      {
        path: Routes.FACTS,
        element: <FactsPage/>,
      },
      {
        path: Routes.BREEDS,
        element: <BreedsPage/>,
      },
      {
        path: Routes.ERROR,
        element: <ErrorPage/>,
      }
    ] as Route[]
  }
]);