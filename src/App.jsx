import Home from "./pages/Home";
import Job from "./pages/Job";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/job/:id", element: <Job /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
