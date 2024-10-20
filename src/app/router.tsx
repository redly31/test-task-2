import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import FactsPage from "../pages/facts/FactsPage";
import BreedsPage from "../pages/breeds/BreedsPage";
import ErrorPage from "../pages/error/ErrorPage";
import { AppLayout } from "./layout";

enum Routes {
    HOME = '/',
    FACTS = '/facts',
    BREEDS = '/breeds',
    ERROR = '/*',
}

export type Route = {
    path: string,
    element: JSX.Element,
}

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